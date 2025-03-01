import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatWidget.module.css';

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
    <div className={styles.widgetWrapper}>
      {isOpen ? (
        <div className={styles.widgetContainer}>
          <div className={styles.header}>
            Вертер-ассистент
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть чат"
            >
              ✕
            </button>
          </div>
          <div className={styles.messagesContainer}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.role === 'user' ? styles.userMessage : styles.assistantMessage}
              >
                {message.content}
              </div>
            ))}
            {isLoading && <div className={styles.loadingSpinner} />}
            {error && <div className={styles.errorMessage}>{error}</div>}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles.inputContainer}>
            <textarea
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Задайте любой вопрос"
              maxLength={300}
            />
            <button 
              className={styles.sendButton}
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
          className={styles.toggleButton}
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
  );
}; 