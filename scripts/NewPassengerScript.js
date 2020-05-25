// ----------------Time of logon---------------------------
function myFunction() {
  setTimeout(() => {
    alert('You have been log out!! Please login again');
    window.open('./index.html', '_self');
  }, 10800);
}
