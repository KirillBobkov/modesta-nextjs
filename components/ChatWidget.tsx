import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    if (userMessage.length > 300) {
      setError('Сообщение не может превышать 300 символов');
      return;
    }

    setError(null);
    setInput('');
    setIsLoading(true);
    
    // Add user message immediately
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 seconds timeout

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": window.location.hostname,
        },
        signal: controller.signal,
        body: JSON.stringify({
          "model": "openchat/openchat-7b:free",
          "messages": [
            {
              "role": "system",
              "content": "You are a specialized AI assistant. Answer only in Russian. Focus strictly on prosthetics, prosthetic arms, and biomedicine. Do not generate unverified claims; base responses on peer-reviewed research or medical guidelines. Avoid hallucinations and speculative content."
            },
            {
              "role": "user",
              "content": userMessage
            }
          ],
          "temperature": 0.7,
          "max_tokens": 1024
        })
      });

      clearTimeout(timeoutId);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'API request failed');
      }
      
      const data = await response.json();
      const aiResponse = data.choices[0].message.content;
      
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      setError(error instanceof DOMException && error.name === 'AbortError' 
        ? 'Превышено время ожидания ответа (20 секунд). Пожалуйста, попробуйте снова.' 
        : 'Произошла ошибка. Пожалуйста, попробуйте позже.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
      <div className="fixed bottom-0 right-0 p-5 w-full z-10 md:bottom-5 md:right-20 md:p-0 md:w-auto">
        {isOpen ? (
          <div className="slide-in w-full h-[calc(100dvh-100px)] bg-[var(--chat-widget-bg)] rounded-xl shadow-lg flex flex-col overflow-hidden md:w-96 md:max-w-full md:h-[500px]">
            <div className="bg-[var(--message-header)] text-[var(--font-color)] p-4 font-black flex justify-between items-center">
              Вертер-ассистент
              <button 
                className="bg-transparent border-none text-[var(--font-color)] text-lg cursor-pointer p-1 leading-none opacity-80 transition-opacity duration-200 hover:opacity-100"
                onClick={() => setIsOpen(false)}
                aria-label="Закрыть чат"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 bg-[var(--chat-widget-bg)]">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-2 px-2.5 rounded-2xl my-1 max-w-[80%] break-words text-[var(--font-color)] ${
                    message.role === 'user' 
                      ? 'bg-[var(--user-message-bg)] ml-auto' 
                      : 'bg-[var(--assistant-message-bg)]'
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {isLoading && (
                <div className="w-5 h-5 my-2.5 mx-auto border-2 border-[var(--secondary-card-bg-color)] border-t-[var(--accent)] rounded-full animate-spin" />
              )}
              {error && (
                <div className="text-[var(--helper-red)] text-center p-2.5 my-1 bg-[var(--card-bg-color)] rounded-lg">
                  {error}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-[var(--secondary-card-bg-color)] flex items-center gap-2.5 bg-[var(--card-bg-color)]">
              <textarea
                className="flex-1 border border-[var(--secondary-card-bg-color)] rounded-lg p-2 px-3 resize-none h-25 font-inherit bg-[var(--bg-color)] text-[var(--font-color)] placeholder:text-[var(--secondary-font-color)] focus:outline-none focus:border-[var(--accent)]"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Задайте любой вопрос"
                maxLength={300}
              />
              <button 
                className="w-10 h-10 rounded-full border-none bg-[var(--accent)] text-black cursor-pointer flex items-center justify-center transition-colors duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={isLoading || !input.trim() || input.length > 300}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <button 
            className="w-12 h-12 rounded-[28px] bg-[var(--accent)] border-none text-black cursor-pointer flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 hover:opacity-90 absolute bottom-5 right-20 md:relative md:bottom-auto md:right-auto"
            onClick={() => setIsOpen(true)}
            aria-label="Открыть чат"
          >
            <svg 
              viewBox="0 0 24 24" 
              width="24" 
              height="24" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}; 