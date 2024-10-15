/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
document.getElementById('notification-toggle').addEventListener('change', function() {
    if (this.checked) {
        // eslint-disable-next-line no-undef
        alert('Notifications Enabled');
        // Logic for enabling notifications can go here
    } else {
        alert('Notifications Disabled');
        // Logic for disabling notifications can go here
    }
});
