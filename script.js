let date = "12/05/5020"
let maxDaysInMonth = {
        "01" : "31",
        "02" : "28",
        "03" : "31",
        "04" : "30",
        "05" : "31",
        "06" : "30",
        "07" : "31",
        "08" : "31",
        "09" : "30",
        "10" : "31",
        "11" : "30",
        "12" : "31"
    }

    //console.log("test2", maxDaysInMonth["08"])

function isValideDate() {
    let tableauDate = date.split("/")
    console.log("test split", tableauDate)
    let month = tableauDate[1]
    //console.log("mois", month)

    if (tableauDate[0] > 0 && tableauDate[0] <= maxDaysInMonth[month] && tableauDate[1] >= 1 && tableauDate[1] <= 12 && tableauDate[2] > 999 && tableauDate[2] <= 9999) {
        console.log ("Date valide")
        let stringDate = tableauDate.join("")
        console.log ("Date chaine", stringDate)
        return stringDate
    } else {
        console.log ("Date invalide")
    }
}

//console.log ("test3", isValideDate())

function isPalindrome(stringDate) {
    stringDate = isValideDate()
    const longueur = stringDate.length
    let palin = true

    for (let i = 0; i < longueur / 2; i++) {
        if (stringDate[i] !== stringDate[longueur - 1 - i]) {
            palin = false
            break;
        }
    }

    if (palin) {
        console.log("C'est un palindrome")
    } else {
        console.log("Ce n'est pas un palindrome")
    }
}

isPalindrome()