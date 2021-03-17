var student = [
  {
    nome: 'Harry',
    cognome: 'Potter',
    eta: '12',
    casata: 'Grifondoro'
  }
]

for (var key in student) {
  console.log(student[key]);
}

var studenti = [
  {
    nome: 'Harry',
    cognome: 'Potter',
    eta: 13,
    casata: 'Grifondoro',
  },
  {
    nome: 'Draco',
    cognome: 'Malfoy',
    eta: 12,
    casata: 'Serpeverde',
  },
  {
    nome: 'Luna',
    cognome: 'Lovegood',
    eta: 14,
    casata: 'Corvonero',
  }
]

$(document).ready(function() {
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i]);
  for (var kiave in studenti[i]) {
    console.log(kiave, studenti[i][kiave]);
  }
  $('#lista').append('<li>' + studenti[i].nome + ' ' + studenti[i].cognome + '</li')
}
});

$('#add').click(function () {
  var extraStudente = {};

  var extraStudente = {
    'nome': '',
    'cognome': '',
    'eta': '',
    'casata': '',
  }

  extraStudente.nome = $("#nome").val();
  extraStudente.cognome = $("#cognome").val();
  extraStudente.eta = $("#eta").val();
  extraStudente.casata = $("#casata").val();

  studenti.push(extraStudente);

  console.log(studenti);

})

// ES 2

// var grifondoro = ['Harry', 'Ron', 'Hermione'];
// var serpeverde = ['Malfoy', 'Tiger', 'Goyle'];
// var corvonero = ['Peggy', 'Luna', 'Tom'];
// var tassorosso = ['Joy', 'Percy', 'Jane'];
//
// var casate1 = [grifondoro, serpeverde];
// var casate2 = [corvonero, tassorosso];
//
// var hogwarts = [casate1, casate2];
//
// // console.log(casate);
//
// for (var i = 0; i < hogwarts.length; i++) {
//   for (var j = 0; j < hogwarts[i].length; j++) {
//       console.log(hogwarts[i][j]);
//   }
// }
//

// PROVA APPEND

// var mio = document.getElementById('prova');
//
// mio.append = function (stringa) {
//   this.innerHTML += stringa;
// }
//
// mio.append("STRINGA DA APPENDERE!!!")
