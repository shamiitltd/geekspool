const deleteRssButtons = document.querySelectorAll(".deleteRss");
const loadingSpinner = document.querySelector('.loading-spinner');
if (deleteRssButtons) {
    for (let i = 0; i < deleteRssButtons.length; i++) {
        deleteRssButtons[i].addEventListener('click', async (e) => {
            loadingSpinner.classList.remove('invisible');
            const rowgroup = document.getElementById(`row${i + 1}`);
            deleteRssData(deleteRssButtons[i], rowgroup);
        })
    }
}

async function deleteRssData(deleteRssButton, rowgroup) {
    let rssid = deleteRssButton.dataset.rssid;
    const formData = {
        rssid: rssid
    };
    if (confirm('Are you sure you want to delete?')) {
        let res = await axios.post(`/deleteRssfile`, formData);
        loadingSpinner.classList.add('invisible');
        rowgroup.classList.add('invisible');
        alert(res.data);
    } else {
        loadingSpinner.classList.add('invisible');
        alert("Not Deleted!!!");
    }
}
