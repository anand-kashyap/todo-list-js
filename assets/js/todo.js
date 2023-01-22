function addTodoItem(input, ul) {
	const val = input.value;
	if (val.trim() === '') {
		return;
	}
	input.value = '';

	const li = document.createElement('li')
	li.innerHTML = `<span>${val}</span> <button class='delete'><i class='fa fa-trash'></i></button>`
	ul.append(li);
}

window.addEventListener('DOMContentLoaded', function () {
	const ul = document.getElementById('todo-items-container'),
	 input = document.getElementById('todo-input'),
	 saveBtn = document.getElementById('save-todo');

	ul.addEventListener('click', function(e) {
		const target = e.target,
		 {nodeName, className} = target;
		const isLi = nodeName === 'LI' || nodeName === 'SPAN',
		 isDelBtn = nodeName === 'BUTTON' && className === 'delete' ,
		 isDelIcon = nodeName === 'I' && className === 'fa fa-trash';

		if(isLi) {
			target.className = className === 'strike' ? '' : 'strike';
		} else if (isDelBtn || isDelIcon) {
			const li = isDelIcon ? target.parentElement.parentElement : target.parentElement;
			li.remove();
		}
	});

	input.addEventListener('keydown', function (e) {
		if(e.key==='Enter'){
			addTodoItem(this, ul)
		}
	});

	saveBtn.addEventListener('click', function () {
		addTodoItem(input, ul)
	})
})

