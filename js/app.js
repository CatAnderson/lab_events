document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const save = document.querySelector('#new-item-form')
  save.addEventListener('submit',handleSave)
})

const handleSave = function(event){
  event.preventDefault();

  // const newListItem = document.createElement('ul');
  // const title = document.createElement('li');
  // newListItem.appendChild(title);
  
  // const readingList = document.querySelector('ul');
  // readingList.appendChild(newListItem);

  // title.textContent = `${this.title.value}`

  const newListItem = document.createElement('li')
  const titleInput = document.createElement('h2')
  const authorInput = document.createElement('h3')
  const catInput = document.createElement('p')

  newListItem.appendChild(titleInput)
  newListItem.appendChild(authorInput)
  newListItem.appendChild(catInput)

  const readingList = document.querySelector('#reading-list');

  titleInput.textContent = this.title.value
  authorInput.textContent = this.author.value
  catInput.textContent = this.category.value
  
  readingList.appendChild(newListItem)
}

