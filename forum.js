const MAX_COMMENTS = 3; /* This sets the max number of comments to control a later element */

function renderComment(commentText, userName, timestamp) {
  const commentsSection = document.getElementById('comments-section');
  const commentDiv = document.createElement('div');

  commentDiv.innerHTML = `
    <p><strong>${userName}:</strong> ${commentText}</p>
    <small>Posted at: ${timestamp}</small>
    <button class="delete-btn">Delete</button>
  `;

  commentDiv.querySelector('.delete-btn').addEventListener('click', function () {
    commentDiv.remove();

    /* Allows comments to be loaded when navigating to the forum from any page */
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    const updatedComments = storedComments.filter(comment => comment.text !== commentText || comment.name !== userName);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  });

  commentsSection.appendChild(commentDiv);

  /* If there are too many comments, the OLDEST comment is deleted */
  while (commentsSection.childElementCount > MAX_COMMENTS) {
    commentsSection.removeChild(commentsSection.firstChild);
  }

  /* used in tandem with the above storage to load comments */
  syncCommentsToLocalStorage();
}

/* Same as above, saves to read-only to allow the comments to be maintained for invited users */
function syncCommentsToLocalStorage() {
  const comments = [];
  const commentsDivs = document.querySelectorAll('#comments-section div');

  commentsDivs.forEach(div => {
    const text = div.querySelector('p').textContent.replace(/^[^:]+:\s*/, ''); 
    const name = div.querySelector('p strong').textContent.replace(':', ''); 
    const timestamp = div.querySelector('small').textContent.replace('Posted at: ', ''); 

    comments.push({ text, name, timestamp });
  });

  localStorage.setItem('comments', JSON.stringify(comments));
}

document.getElementById('comment-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const commentInput = document.getElementById('comment-input');
  const commentName = document.getElementById('comment-name');
  const commentText = commentInput.value;
  const userName = commentName.value;

  if (commentText.trim() === '' || userName.trim() === '') return;

  const timestamp = new Date().toLocaleString();

  /* Calls the first function and thus the save function */
  renderComment(commentText, userName, timestamp);

  const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
  storedComments.push({ text: commentText, name: userName, timestamp });
  if (storedComments.length > MAX_COMMENTS) {
    storedComments.shift(); /* Deletes the comments in synchronity with the 'delete oldest comment' function */
  }
  localStorage.setItem('comments', JSON.stringify(storedComments));

  commentInput.value = '';
  commentName.value = '';
});


window.addEventListener('load', function () {
  const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
  storedComments.forEach(comment => {
    renderComment(comment.text, comment.name, comment.timestamp);
  });
});
