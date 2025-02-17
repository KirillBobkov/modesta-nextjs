const { VK } = require("vk-io");
const fs = require("fs");

const token =
"vk1.a.MHXU6emIuEUpD3XwYaXKf3b6VlPjdlAOq-fDlYrF8RGDQJO3BZFIVFfTaUAnkR2_yOR8GK3ye7rC43C1GX70iNRACsobDUJ7c8js0uI8WCtTt1fNdMlYPrpon13BgDlF9fT1w73-8nW00XZ1AC8cagcxdsXTUxVGdiLX94ZIb8ndsnSZ244U5v2yttFPNCm79GjRtGXiPLTkWQYd9Z_i1Q"

const groupId = -131964440; // Replace with the ID of your group (note the negative sign)

const vk = new VK({
  token: token,
});

const formatDate = (timestamp) => {
  // Преобразуем timestamp в объект Date
  const date = new Date(timestamp);

  // Получаем компоненты даты
  const day = String(date.getDate()).padStart(2, "0"); // День
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяц (месяцы начинаются с 0)
  const year = date.getFullYear(); // Год
  const hours = String(date.getHours()).padStart(2, "0"); // Часы
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Минуты

  // Форматируем дату в нужный формат
  const finalDate = `${day}.${month}.${year} ${hours}:${minutes}`;
  return finalDate;
};

async function getPosts() {
  try {
    const response = await vk.api.wall.get({
      owner_id: groupId,
      count: 200, // Number of posts to retrieve
      offset: 0, // Offset for pagination
      filter: "owner",
    });

    let posts = response.items;

    function processSocialMediaPosts(data) {
      // Check if data is valid and is an array
      if (!Array.isArray(data)) {
        console.error("Invalid data format. Expected an array.");
        return [];
      }

      return data.map((post, index) => {
        // Check if the post is null or undefined
        if (!post) {
          console.warn(`Post at index ${index} is null or undefined.`);
          return null;
        }

        // Extracting relevant information from each post
        const processedPost = {
          id: post.id,
          date: formatDate(post.date * 1000), // Convert Unix timestamp to readable date
          ownerId: post.owner_id,
          likesCount: post.likes.count,
          commentsCount: post.comments.count,
          viewsCount: post.views.count,
          text:
            post.text ||
            (post.copy_history && post.copy_history.length > 0
              ? post.copy_history[0].text
              : ""),
          attachments: [],
        };

        if (post.attachments.length > 0) {
          post.attachments.forEach((attachment) => {
            if (attachment.type === "photo") {
              processedPost.attachments.push({
                type: "photo",
                photoUrl: attachment.photo.orig_photo.url, // Get the largest size
              });
            }
            if (attachment.type === "video") {
              processedPost.attachments.push({
                type: "video",
                title: attachment.video.title,
                iframe: `https://vk.com/video_ext.php?oid=${attachment.video.owner_id}&id=${attachment.video.id}`,
              });
            }
            if (attachment.type === "link") {
              processedPost.attachments.push({
                type: "link",
                title: attachment.link.title,
                url: attachment.link.url,
                image: attachment.link.photo.sizes[0].url,
              });
            }
          });
        }

        // Process attachments from the copy history if available
        if (post.copy_history && post.copy_history.length > 0) {
          const originalPost = post.copy_history[0];

          // Check if there are attachments and process them
          if (originalPost.attachments) {
            originalPost.attachments.forEach((attachment) => {
              if (attachment.type === "video") {
                processedPost.attachments.push({
                  type: "video",
                  title: attachment.video.title,
                  iframe: `https://vk.com/video_ext.php?oid=${attachment.video.owner_id}&id=${attachment.video.id}`,
                });
              } else if (attachment.type === "photo") {
                processedPost.attachments.push({
                  type: "photo",
                  photoUrl: attachment.photo.orig_photo.url, // Get the largest size
                });
              }
            });
          }
        }

        return processedPost;
      });
    }

    const data = processSocialMediaPosts(posts);

    fs.writeFileSync(
      "content/news.json",
      JSON.stringify(data, null, 2),
      "utf-8"
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

getPosts();
