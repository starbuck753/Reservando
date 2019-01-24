var expect = chai.expect;

describe('Restaurant', function() {
    describe('Reservar Horario', function() {
        it('Ingresa horario no existente. No hace nada. Total de horarios: 3.', function() {
            aplicacion.listado.restaurantes[0].reservarHorario("12:00");
            expect(aplicacion.listado.restaurantes[0].horarios.length).to.equal(3);
        });
        it('Ingresa cualquier string. No hace nada. Total de horarios: 3.', function() {
            aplicacion.listado.restaurantes[0].reservarHorario("bla");
            expect(aplicacion.listado.restaurantes[0].horarios.length).to.equal(3);
        });
        it('No ingresa nada. No hace nada. Total de horarios: 3.', function() {
            aplicacion.listado.restaurantes[0].reservarHorario();
            expect(aplicacion.listado.restaurantes[0].horarios.length).to.equal(3);
        });
        it('Ingresa horario existente. Lo elimna del array. Total de horarios: 2.', function() {
            aplicacion.listado.restaurantes[0].reservarHorario("13:00");
            expect(aplicacion.listado.restaurantes[0].horarios.length).to.equal(2);
        });
    });

    describe('Calificar', function() {
        it('No ingresa nada. No hace nada. Total de Calificaciones: 5.', function() {
            aplicacion.listado.restaurantes[0].calificar();
            expect(aplicacion.listado.restaurantes[0].calificaciones.length).to.equal(5);
        });
        it('Ingresa un string. No hace nada. Total de Calificaciones: 5.', function() {
            aplicacion.listado.restaurantes[0].calificar("bla");
            expect(aplicacion.listado.restaurantes[0].calificaciones.length).to.equal(5);
        });
        it('Ingresa un numero <= 0. No hace nada. Total de Calificaciones: 5.', function() {
            aplicacion.listado.restaurantes[0].calificar(-2);
            expect(aplicacion.listado.restaurantes[0].calificaciones.length).to.equal(5);
        });
        it('Ingresa un numero >= 10. No hace nada. Total de Calificaciones: 5.', function() {
            aplicacion.listado.restaurantes[0].calificar(12);
            expect(aplicacion.listado.restaurantes[0].calificaciones.length).to.equal(5);
        });
        it('Ingresa el numero 0. No lo agrega. Total de Calificaciones: 5.', function() {
            aplicacion.listado.restaurantes[0].calificar(0);
            expect(aplicacion.listado.restaurantes[0].calificaciones.length).to.equal(5);
        });
        it('Ingresa el numero 10. No lo agrega. Total de Calificaciones: 5.', function() {
            aplicacion.listado.restaurantes[0].calificar(10);
            expect(aplicacion.listado.restaurantes[0].calificaciones.length).to.equal(5);
        });
        it('Ingresa el numero 1. Lo agrega. Total de Calificaciones: 6.', function() {
            aplicacion.listado.restaurantes[0].calificar(1);
            expect(aplicacion.listado.restaurantes[0].calificaciones.length).to.equal(6);
        });
        it('Ingresa el numero 9. Lo agrega. Total de Calificaciones: 7.', function() {
            aplicacion.listado.restaurantes[0].calificar(9);
            expect(aplicacion.listado.restaurantes[0].calificaciones.length).to.equal(7);
        });
        it('Ingresa un numero entre 1 y 9. Lo agrega. Total de Calificaciones: 8.', function() {
            aplicacion.listado.restaurantes[0].calificar(5);
            expect(aplicacion.listado.restaurantes[0].calificaciones.length).to.equal(8);
        });
    });
});

