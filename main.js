const button = document.getElementById('button');
const answer = document.getElementById('answer');


const soty = {
    1990: 'Tony Hawk',
    1991: 'Danny Way',
    1992: 'John Cardiel',
    1993: 'Salman Agah',
    1994: 'Mike Carroll',
    1995: 'Chris Senn',
    1996: 'Eric Koston',
    1997: 'Bob Burnquist',
    1998: 'Andrew Reynolds',
    1999: 'Brian Anderson',
    2000: 'Geoff Rowley',
    2001: 'Arto Saari',
    2002: 'Tony Trujillo',
    2003: 'Mark Appleyard',
    2004: 'Danny Way',
    2005: 'Chris Cole',
    2006: 'Daewon Song',
    2007: 'Marc Johnson',
    2008: 'Silas Baxter-Neal',
    2009: 'Chris Cole',
    2010: 'Leo Romero',
    2011: 'Grant Taylor',
    2012: 'David Gonzalez',
    2013: 'Ishod Wair',
    2014: 'Wes Kremer',
    2015: 'Anthony Van Engelen',
    2016: 'Kyle Walker',
    2017: 'Jamie Foy',
    2018: 'Tyshawn Jones',
    2019: 'Milton Martinez',
    2020: 'Mason Silva',
    2021: 'Mark Suciu',
    2022: 'Tyshawn Jones',
}

const findSoty = () => {
    let year = input.value;
    
    for (let number in soty) {
       if (number === year) {
        return answer.innerHTML = soty[number]
       } 
    }

    return answer.innerHTML = 'Invalid Year'
    
}

button.addEventListener('click', findSoty)


