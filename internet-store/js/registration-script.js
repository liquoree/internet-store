function show_hide_password(target){
	var input = document.querySelector('.registration-pass-input-area');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
document.querySelector('.registration-input-area-img').addEventListener('click', function() {
  return show_hide_password(this);
})