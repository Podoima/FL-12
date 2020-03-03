(function($) {
	$.fn.todolist = function() {
		const list = $('.list');
		const input = $('#add-input');
		const add = $('#add-submit');

		const todos = [
  		{
    		text: "Buy milk",
    		done: false
  		},
  		{
    		text: "Play with dog",
    		done: true
  		}
		];

		$(add).click(function() {
			const itemTemplate = `<li class="item">
        		<span class="item-text">${$('input').val()}</span>
        		<button class="item-remove">Remove</button>
      		</li>`;
			todos.push({text: $('input').val(), done: false});
			$(list).append(itemTemplate);
			return false;
		});

		$(list).on('click', '.item .item-text', function() {
			const index = $(this).parent().index();
			$(todos)[index].done = $(todos)[index].done ? false : true;
			$(this).toggleClass('done');
		});

		$(list).on('click', '.item .item-remove', function() {
			const index = $(this).parent().index();
			todos.splice(index, 1);
			$(this).parent().remove();
		});
	};
}(jQuery));
