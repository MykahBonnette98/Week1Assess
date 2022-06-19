console.log('Welcome User!')

const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

 reader.question('Create password: ', function(input){
    const passCheck = [];
    if(input.length < 10){
       passCheck.push('needs to be longer than 10 characters')
    }
    if(passCheck.length === 0){
        console.log('Valid password!')
    } else {
        console.log('Invalid:')
        for(let i=0; i < passCheck.length; i++){
            console.log(passCheck[i])
        }
    }
    reader.close()
})
