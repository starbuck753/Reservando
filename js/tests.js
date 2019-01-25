var expect = chai.expect;

describe('Restaurant', function() {
    describe('Reservar Horario', function() {
        var newRest = new Restaurant(100,'Test','','',["13:00", "15:30", "18:00"],'',[]);
        var initCount = newRest.horarios.length;
        var initArray = newRest.horarios;

        it('Ingresa horario no existente. No hace nada - Total de horarios: Cantidad Inicial. El array de horarios no cambia.', function() {
            newRest.reservarHorario("12:00");
            expect(newRest.horarios.length).to.equal(initCount);
            expect(newRest.horarios).to.equal(initArray);
        });
        it('Ingresa cualquier string. No hace nada - Total de horarios: Cantidad Inicial. El array de horarios no cambia.', function() {
            newRest.reservarHorario("bla");
            expect(newRest.horarios.length).to.equal(initCount);
            expect(newRest.horarios).to.equal(initArray);
        });
        newRest.reservarHorario();
        it('No ingresa nada. No hace nada - Total de horarios: Cantidad Inicial. El array de horarios no cambia.', function() {
            expect(newRest.horarios.length).to.equal(initCount);
            expect(newRest.horarios).to.equal(initArray);
        });
        it('Ingresa horario existente. Lo elimna del array - Total de horarios: Cantidad Inicial - 1.', function() {
            newRest.reservarHorario("13:00");
            expect(newRest.horarios.length).to.equal(initCount -1);
        });
    });

    describe('Obtener Puntuacion', function() {
        it('No hay puntuaciones en el restaurante. Promedio: 0.', function() {
            var newRest = new Restaurant(100,'Test','','',[],'',[])
            expect(newRest.obtenerPuntuacion()).to.equal(0);
        });
        it('Puntuaciones del Restaurant: 4, 5, 6. Promedio: 5.', function() {
            var newRest = new Restaurant(100,'Test','','','','',[4, 5, 6]);
            expect(newRest.obtenerPuntuacion()).to.equal(5);
        });
        it('Puntuaciones del Restaurant: 4, 4, 5. Promedio: 4.3.', function() {
            var newRest = new Restaurant(100,'Test','','','','',[4, 4, 5]);
            expect(newRest.obtenerPuntuacion()).to.equal(4.3);
        });
        it('Puntuaciones del Restaurant: 5. Promedio: 5.', function() {
            var newRest = new Restaurant(100,'Test','','','','',[5]);
            expect(newRest.obtenerPuntuacion()).to.equal(5);
        });
    });

    describe('Calificar', function() {
        var newRest = new Restaurant(100,'Test','','',[],'',[3, 8, 9]);
        var initCount = newRest.calificaciones.length;
        var initArray = newRest.calificaciones;

        it('No ingresa nada. No hace nada - Total de Calificaciones: Cantidad Inicial. El array de calificaciones no cambia.', function() {
            newRest.calificar();
            expect(newRest.calificaciones.length).to.equal(initCount);
            expect(newRest.calificaciones).to.equal(initArray);
        });
        it('Ingresa un string. No hace nada - Total de Calificaciones: Cantidad Inicial. El array de calificaciones no cambia.', function() {
            newRest.calificar("bla");
            expect(newRest.calificaciones.length).to.equal(initCount);
            expect(newRest.calificaciones).to.equal(initArray);
        });
        it('Ingresa un numero <= 0. No lo agrega - Total de Calificaciones: Cantidad Inicial. El array de calificaciones no cambia.', function() {
            newRest.calificar(-2);
            expect(newRest.calificaciones.length).to.equal(initCount);
            expect(newRest.calificaciones).to.equal(initArray);
        });
        it('Ingresa un numero >= 10. No lo agrega - Total de Calificaciones: Cantidad Inicial. El array de calificaciones no cambia.', function() {
            newRest.calificar(12);
            expect(newRest.calificaciones.length).to.equal(initCount);
            expect(newRest.calificaciones).to.equal(initArray);
        });
        it('Ingresa el numero 0. No lo agrega - Total de Calificaciones: Cantidad Inicial. El array de calificaciones no cambia.', function() {
            newRest.calificar(0);
            expect(newRest.calificaciones.length).to.equal(initCount);
            expect(newRest.calificaciones).to.equal(initArray);
        });
        it('Ingresa el numero 10. No lo agrega - Total de Calificaciones: Cantidad Inicial. El array de calificaciones no cambia.', function() {
            newRest.calificar(10);
            expect(newRest.calificaciones.length).to.equal(initCount);
            expect(newRest.calificaciones).to.equal(initArray);
        });
        it('Ingresa el numero 1. Lo agrega - Total de Calificaciones: Cantidad Inicial + 1.', function() {
            newRest.calificar(1);
            expect(newRest.calificaciones.length).to.equal(initCount +1);
        });
        it('Ingresa el numero 9. Lo agrega - Total de Calificaciones: Cantidad Inicial + 2.', function() {
            newRest.calificar(9);
            expect(newRest.calificaciones.length).to.equal(initCount +2);
        });
        it('Ingresa un numero entre 1 y 9. Lo agrega - Total de Calificaciones: Cantidad Inicial + 3.', function() {
            newRest.calificar(5);
            expect(newRest.calificaciones.length).to.equal(initCount +3);
        });
    });
});

