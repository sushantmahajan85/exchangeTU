var nameTag = document.getElementById('backend-name')
var rollTag = document.getElementById('backend-rollNumber')
var numTag = document.getElementById('backend-number')
var btnTag = document.getElementById('backend_btn')

function postOnBackend () {
    // Check if namTag is Strictly a number !
    if (parseInt(numTag.value)) {
        fetch('https://tff-backend.herokuapp.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                { query: 'mutation { addStudent ( name: "' + nameTag.value + '", rollNumber: "' + rollTag.value + '", numBottles: ' + parseInt(numTag.value) + ')  { code } }' }
            ),
        }).then(
            res => res.json()
        ).then(
            res => {
                // End Loader here
                console.log(res.data)
                window.alert(res.data.addStudent.code)
            } 
        )
    }
    else {
     window.alert('Invalid Number of Bottles')   
    }
    // console.log(nameTag.value)
}

