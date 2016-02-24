        $( document ).ready(function() {
          setInterval(function(){

            var d = new Date();
            var n = addZero(d.getHours());
            var min = addZero(d.getMinutes());
            var mes = d.getMonth();
            var dia = d.getDay();
            var diaMes = addZero(d.getDate());

            var semana = new Array(6);
            semana[0]='dom';
            semana[1]='seg';
            semana[2]='ter';
            semana[3]='quar';
            semana[4]='quin';
            semana[5]='sex';
            semana[6]='sab';

            var semana1 = new Array(6);
            semana1[0]='domingo';
            semana1[1]='segunda-feira';
            semana1[2]='terça-feira';
            semana1[3]='quarta-feira';
            semana1[4]='quinta-feira';
            semana1[5]='sexta-feira';
            semana1[6]='sabado';

            var meses = new Array(12);
            meses[0]='jan';
            meses[1]='fev';
            meses[2]='mar';
            meses[3]='abr';
            meses[4]='mai';
            meses[5]='jun';
            meses[6]='jul';
            meses[7]='ago';
            meses[8]='set';
            meses[9]='out';
            meses[10]='nov';
            meses[11]='dez';

            var meses1 = new Array(12);
            meses1[0]='janeiro';
            meses1[1]='fevereiro';
            meses1[2]='março';
            meses1[3]='abril';
            meses1[4]='maio';
            meses1[5]='junho';
            meses1[6]='julho';
            meses1[7]='agosto';
            meses1[8]='setembro';
            meses1[9]='outubro';
            meses1[10]='novembro';
            meses1[11]='dezembro';

            $(".hora").html( n+":"+min );
            $(".data").html( semana[dia] + ", " + diaMes + " de " + meses[mes] );
            $(".data1").html( semana1[dia] + ", " + diaMes + " de " + meses1[mes] );
          }, 100);
        });

        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
