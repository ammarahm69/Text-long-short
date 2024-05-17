function change() {
    if (event.target.innerHTML == 'See Less') {
        let text = document.getElementById('text');
        let btn = document.getElementById('bt')
        text.innerHTML = ' Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        btn.innerHTML = 'See More'
    } else {
        let text = document.getElementById('text');
        text.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam quibusdam accusamus veritatis optio, corporis quae amet ad voluptatum sint esse quis ipsa quisquam sit iste cumque quasi obcaecati suscipit explicabo?Laboriosam quibusdam accusamus veritatis optio, corporis quae amet ad voluptatum sint esse quis ipsa quisquam sit iste cumque quasi obcaecati suscipit explicabo?Laboriosam quibusdam accusamus veritatis optio, corporis quae amet ad voluptatum sint esse quis ipsa quisquam sit iste cumque quasi obcaecati suscipit explicabo?Laboriosam quibusdam accusamus veritatis optio, corporis quae amet ad voluptatum sint esse quis ipsa quisquam sit iste cumque quasi obcaecati suscipit explicabo?Laboriosam quibusdam accusamus veritatis optio, corporis quae amet ad voluptatum sint esse quis ipsa quisquam sit iste cumque quasi obcaecati suscipit explicabo?Laboriosam quibusdam accusamus veritatis optio, corporis quae amet ad voluptatum sint esse quis ipsa quisquam sit iste cumque quasi obcaecati suscipit explicabo?'
        let btn = document.getElementById('bt');
        btn.innerHTML = 'See Less';
    }
};