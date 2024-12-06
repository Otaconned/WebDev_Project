const MAX_COMMENTS = 3; // Maximum number of comments allowed

function renderComment(commentText, userName, timestamp) {
  const commentsSection = document.getElementById('comments-section');
  const commentDiv = document.createElement('div');

  commentDiv.innerHTML = `
    <p><strong>${userName}:</strong> ${commentText}</p>
    <small>Posted at: ${timestamp}</small>
    <button class="delete-btn">Delete</button>
  `;

  // Add delete functionality
  commentDiv.querySelector('.delete-btn').addEventListener('click', function () {
    commentDiv.remove();

    // Update localStorage
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    const updatedComments = storedComments.filter(comment => comment.text !== commentText || comment.name !== userName);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  });

  // Append the new comment to the section
  commentsSection.appendChild(commentDiv);

  // Remove oldest comment if the limit is exceeded
  while (commentsSection.childElementCount > MAX_COMMENTS) {
    commentsSection.removeChild(commentsSection.firstChild);
  }

  // Update localStorage to reflect the current state
  syncCommentsToLocalStorage();
}

// Sync the displayed comments with localStorage
function syncCommentsToLocalStorage() {
  const comments = [];
  const commentsDivs = document.querySelectorAll('#comments-section div');

  commentsDivs.forEach(div => {
    const text = div.querySelector('p').textContent.replace(/^[^:]+:\s*/, ''); // Extract comment text
    const name = div.querySelector('p strong').textContent.replace(':', ''); // Extract user name
    const timestamp = div.querySelector('small').textContent.replace('Posted at: ', ''); // Extract timestamp

    comments.push({ text, name, timestamp });
  });

  localStorage.setItem('comments', JSON.stringify(comments));
}

// Handle Comment Submission
document.getElementById('comment-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const commentInput = document.getElementById('comment-input');
  const commentName = document.getElementById('comment-name');
  const commentText = commentInput.value;
  const userName = commentName.value;

  if (commentText.trim() === '' || userName.trim() === '') return;

  const timestamp = new Date().toLocaleString();

  // Render the comment on the page
  renderComment(commentText, userName, timestamp);

  // Save the comment to localStorage
  const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
  storedComments.push({ text: commentText, name: userName, timestamp });
  if (storedComments.length > MAX_COMMENTS) {
    storedComments.shift(); // Remove the oldest comment in localStorage
  }
  localStorage.setItem('comments', JSON.stringify(storedComments));

  // Clear input fields
  commentInput.value = '';
  commentName.value = '';
});

// Load Comments on Page Load
window.addEventListener('load', function () {
  const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
  storedComments.forEach(comment => {
    renderComment(comment.text, comment.name, comment.timestamp);
  });
});
