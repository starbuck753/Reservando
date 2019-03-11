var expect = chai.expect;

var newRests = [
    new Restaurant(101,'Test1','Rubro 4','Ciudad 2',["13:00", "15:30", "18:00"],'',[]),
    new Restaurant(102,'Test2','Rubro 2','Ciudad 1',["12:00", "15:00", "18:30"],'',[4, 5, 6]),
    new Restaurant(103,'Test3','Rubro 4','Ciudad 3',["13:00", "15:30", "18:30"],'',[4, 4, 5]),
    new Restaurant(104,'Test4','Rubro 1','Ciudad 1',["13:00", "15:00", "18:00"],'',[5]),
    new Restaurant(105,'Test5','Rubro 5','Ciudad 5',["12:00", "15:30", "19:00"],'',[3, 8, 9])
];
var newList = new Listado(newRests); 

describe('Restaurant', function() {
    describe('Reservar Horario', function() {
        var newRest = newRests[0];
        var initCount = newRest.horarios.length;
        var initArray = newRest.horarios;

        it('Ingresa horario no existente. No hace nada - Total de horarios: Cantidad Inicial. El array de horarios no cambia.', function() {
            newRest.reservarHorario("12:00");
            expect(newRest.horarios.length).to.eql(initCount);
            expect(newRest.horarios).to.eql(initArray);
        });
        it('Ingresa cualquier string. No hace nada - Total de horarios: Cantidad Inicial. El array de horarios no cambia.', function() {
            newRest.reservarHorario("bla");
            expect(newRest.horarios.length).to.eql(initCount);
            expect(newRest.horarios).to.eql(initArray);
        });
        newRest.reservarHorario();
        it('No ingresa nada. No hace nada - Total de horarios: Cantidad Inicial. El array de horarios no cambia.', function() {
            expect(newRest.horarios.length).to.eql(initCount);
            expect(newRest.horarios).to.eql(initArray);
        });
        it('Ingresa horario existente. Lo elimna del array - Total de horarios: Cantidad Inicial - 1.', function() {
            newRest.reservarHorario("13:00");
            expect(newRest.horarios.length).to.equal(initCount -1);
        });
    });

    describe('Obtener Puntuacion', function() {
        it('No hay puntuaciones en el restaurante - Promedio: 0.', function() {
            var newRest = newRests[0];
            expect(newRest.obtenerPuntuacion()).to.equal(0);
        });
        it('Puntuaciones del Restaurant: 4, 5, 6 - Promedio: 5.', function() {
            var newRest = newRests[1];
            expect(newRest.obtenerPuntuacion()).to.equal(5);
        });
        it('Puntuaciones del Restaurant: 4, 4, 5 - Promedio: 4.3.', function() {
            var newRest = newRests[2];
            expect(newRest.obtenerPuntuacion()).to.equal(4.3);
        });
        it('Puntuaciones del Restaurant: 5 - Promedio: 5.', function() {
            var newRest = newRests[3];
            expect(newRest.obtenerPuntuacion()).to.equal(5);
        });
    });

    describe('Calificar', function() {
        var newRest = newRests[4];
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


describe('Listado', function() {
    describe('Buscar Restaurante - Id Validos entre 101 y 105', function() {
        it('Ingresa un Id valido: 102. Devuelve el objeto correcto - Nombre: Test2.', function() {
            expect(newList.buscarRestaurante(102)).to.include({nombre: 'Test2'});
        });
        it('Ingresa un Id NO valido: 10. No devuelve nda - Length: 0.', function() {
            expect(newList.buscarRestaurante(10)).to.equal(undefined);
        });
    });

    describe('Obener Ciudades sin repetidos y ordenadas', function() {
        it('Valores a obtener: Ciudad 1, Ciudad 2, Ciudad 3, Ciudad 5', function() {
            expect(newList.obtenerUbicaciones()).to.eql(['Ciudad 1','Ciudad 2','Ciudad 3','Ciudad 5']);
        });
    });    

    describe('Obener Rubros sin repetidos y ordenados', function() {
        it('Valores a obtener: Rubro 1, Rubro 2, Rubro 4, Rubro 5', function() {
            expect(newList.obtenerRubros()).to.eql(['Rubro 1','Rubro 2','Rubro 4','Rubro 5']);
        });
    });

    describe('Obener Horarios sin repetidos y ordenados', function() {
        it('Valores a obtener: 12:00, 13:00, 15:00, 15:30, 18:00, 18:30, 19:00', function() {
            expect(newList.obtenerHorarios()).to.eql(['12:00','13:00','15:00','15:30','18:00','18:30','19:00']);
        });
    });


    describe('Obener Restaurantes', function() {
        it('Filtros: Rubro 1, Null, Null - Devuelve: Test4', function() {
            console.log(newList.obtenerRestaurantes('Rubro 1', null, null));
            expect(newList.obtenerRestaurantes('Rubro 1', null, null)[0].nombre).to.equal('Test4');
        });
        it('Filtros: Rubro 2, Ciudad 1, Null - Devuelve: Test2', function() {
            console.log(newList.obtenerRestaurantes('Rubro 2', 'Ciudad 1', null));
            expect(newList.obtenerRestaurantes('Rubro 2', 'Ciudad 1', null)[0].nombre).to.equal('Test2');
        });
        it('Filtros: Null, Ciudad 3, 13:00 - Devuelve: Test3', function() {
            console.log(newList.obtenerRestaurantes(null, 'Ciudad 3', ["13:00"]));
            expect(newList.obtenerRestaurantes(null, 'Ciudad 3', ["13:00"])[0].nombre).to.equal('Test3');
        });
        it('Filtros: Rubro 5, Ciudad 3, 13:00 - No devualeve nada. Length: 0', function() {
            console.log(newList.obtenerRestaurantes('Rubro 5', 'Ciudad 3', ["13:00"]));
            expect(newList.obtenerRestaurantes('Rubro 5', 'Ciudad 3', ["13:00"]).length).to.equal(0);
        });
    });
});


describe('Reserva', function() {
    describe('Calcular Precio Base y Final.', function() {
        var newReserva1 = new Reserva(new Date(2019, 2, 11, 11, 00), 2, 400, "DES15");
        it('Cant de Personas: 2, Precio: 400. Dto: DES15. Precio Base: 800.', function() {
            expect(newReserva1.calcularPrecioBase()).to.equal(800);
        });
        it('Cant de Personas: 2, Precio: 400. Dto: DES15. Precio Final: 680.', function() {
            expect(newReserva1.calcularPrecioFinal()).to.equal(680);
        });    
        var newReserva2 = new Reserva(new Date(2019, 2, 11, 11, 00), 2, 400, "DES200");
        it('Cant de Personas: 2, Precio: 400. Dto: DES200. Precio Base: 800.', function() {
            expect(newReserva2.calcularPrecioBase()).to.equal(800);
        });
        it('Cant de Personas: 2, Precio: 400. Dto: DES200. Precio Final: 600.', function() {
            expect(newReserva2.calcularPrecioFinal()).to.equal(600);
        });
        var newReserva3 = new Reserva(new Date(2019, 2, 11, 11, 00), 2, 400, "DES1");
        it('Cant de Personas: 2, Precio: 400. Dto: DES1. Precio Base: 800.', function() {
            expect(newReserva3.calcularPrecioBase()).to.equal(800);
        });
        it('Cant de Personas: 2, Precio: 400. Dto: DES1. Precio Final: 400.', function() {
            expect(newReserva3.calcularPrecioFinal()).to.equal(400);
        });    
    });    

    describe('Calcular Precio Base y Final. Dtos por grupos grandes (5 personas: 5% dto).', function() {
        var newReserva1 = new Reserva(new Date(2019, 2, 11, 11, 00), 5, 400, "DES15");
        it('Cant de Personas: 5, Precio: 400. Dto: DES15. Precio Base: 2000.', function() {
            expect(newReserva1.calcularPrecioBase()).to.equal(2000);
        });
        it('Cant de Personas: 5, Precio: 400. Dto: DES15. Precio Final: 1600.', function() {
            expect(newReserva1.calcularPrecioFinal()).to.equal(1600);
        });    

        var newReserva2 = new Reserva(new Date(2019, 2, 11, 11, 00), 5, 400, "DES200");
        it('Cant de Personas: 5, Precio: 400. Dto: DES200. Precio Base: 2000.', function() {
            expect(newReserva2.calcularPrecioBase()).to.equal(2000);
        });
        it('Cant de Personas: 5, Precio: 400. Dto: DES200. Precio Final:1700.', function() {
            expect(newReserva2.calcularPrecioFinal()).to.equal(1700);
        });

        var newReserva3 = new Reserva(new Date(2019, 2, 11, 11, 00), 5, 400, "DES1");
        it('Cant de Personas: 5, Precio: 400. Dto: DES1. Devuelve: 2000.', function() {
            expect(newReserva3.calcularPrecioBase()).to.equal(2000);
        });
        it('Cant de Personas: 5, Precio: 400. Dto: DES1. Devuelve: 1500.', function() {
            expect(newReserva3.calcularPrecioFinal()).to.equal(1500);
        });  

        var newReserva4 = new Reserva(new Date(2019, 2, 11, 11, 00), 5, 400, null);
        it('Cant de Personas: 5, Precio: 400. Dto: null. Devuelve: 2000.', function() {
            expect(newReserva4.calcularPrecioBase()).to.equal(2000);
        });
        it('Cant de Personas: 5, Precio: 400. Dto: null. Devuelve: 1900.', function() {
            expect(newReserva4.calcularPrecioFinal()).to.equal(1900);
        });  
    });

    describe('Calcular Precio Base y Final. Dtos por grupos grandes (7 personas: 10% dto).', function() {
        var newReserva1 = new Reserva(new Date(2019, 2, 11, 11, 00), 7, 400, "DES15");
        it('Cant de Personas: 7, Precio: 400. Dto: DES15. Precio Base: 2800.', function() {
            expect(newReserva1.calcularPrecioBase()).to.equal(2800);
        });
        it('Cant de Personas: 7, Precio: 400. Dto: DES15. Precio Final: 2100.', function() {
            expect(newReserva1.calcularPrecioFinal()).to.equal(2100);
        });    

        var newReserva2 = new Reserva(new Date(2019, 2, 11, 11, 00), 7, 400, "DES200");
        it('Cant de Personas: 7, Precio: 400. Dto: DES200. Precio Base: 2800.', function() {
            expect(newReserva2.calcularPrecioBase()).to.equal(2800);
        });
        it('Cant de Personas: 7, Precio: 400. Dto: DES200. Precio Final: 2320.', function() {
            expect(newReserva2.calcularPrecioFinal()).to.equal(2320);
        });

        var newReserva3 = new Reserva(new Date(2019, 2, 11, 11, 00), 7, 400, "DES1");
        it('Cant de Personas: 7, Precio: 400. Dto: DES1. Devuelve: 2800.', function() {
            expect(newReserva3.calcularPrecioBase()).to.equal(2800);
        });
        it('Cant de Personas: 7, Precio: 400. Dto: DES1. Devuelve: 2120.', function() {
            expect(newReserva3.calcularPrecioFinal()).to.equal(2120);
        });  

        var newReserva4 = new Reserva(new Date(2019, 2, 11, 11, 00), 7, 400, null);
        it('Cant de Personas: 7, Precio: 400. Dto: null. Devuelve: 2800.', function() {
            expect(newReserva4.calcularPrecioBase()).to.equal(2800);
        });
        it('Cant de Personas: 7, Precio: 400. Dto: null. Devuelve: 2520.', function() {
            expect(newReserva4.calcularPrecioFinal()).to.equal(2520);
        });  
    });

    describe('Calcular Precio Base y Final. Dtos por grupos grandes (mas de 8 personas: 15% dto).', function() {
        var newReserva1 = new Reserva(new Date(2019, 2, 11, 11, 00), 9, 300, "DES15");
        it('Cant de Personas: 9, Precio: 300. Dto: DES15. Precio Base: 2700.', function() {
            expect(newReserva1.calcularPrecioBase()).to.equal(2700);
        });
        it('Cant de Personas: 9, Precio: 300. Dto: DES15. Precio Final: 1890.', function() {
            expect(newReserva1.calcularPrecioFinal()).to.equal(1890);
        });    

        var newReserva2 = new Reserva(new Date(2019, 2, 11, 11, 00), 9, 300, "DES200");
        it('Cant de Personas: 9, Precio: 300. Dto: DES200. Precio Base: 2700.', function() {
            expect(newReserva2.calcularPrecioBase()).to.equal(2700);
        });
        it('Cant de Personas: 9, Precio: 300. Dto: DES200. Precio Final: 2095.', function() {
            expect(newReserva2.calcularPrecioFinal()).to.equal(2095);
        });

        var newReserva3 = new Reserva(new Date(2019, 2, 11, 11, 00), 9, 300, "DES1");
        it('Cant de Personas: 9, Precio: 300. Dto: DES1. Devuelve: 2700.', function() {
            expect(newReserva3.calcularPrecioBase()).to.equal(2700);
        });
        it('Cant de Personas: 9, Precio: 300. Dto: DES1. Devuelve: 1995.', function() {
            expect(newReserva3.calcularPrecioFinal()).to.equal(1995);
        });  

        var newReserva4 = new Reserva(new Date(2019, 2, 11, 11, 00), 9, 300, null);
        it('Cant de Personas: 9, Precio: 300. Dto: null. Devuelve: 2700.', function() {
            expect(newReserva4.calcularPrecioBase()).to.equal(2700);
        });
        it('Cant de Personas: 9, Precio: 300. Dto: null. Devuelve: 2295.', function() {
            expect(newReserva4.calcularPrecioFinal()).to.equal(2295);
        });  
    });

    describe('Calcular Precio Base y Final. Dtos por grupos grandes (7 personas: 10% dto) mas Adicionales.', function() {
        var newReserva1 = new Reserva(new Date(2019, 2, 11, 13, 30), 7, 400, null);
        it('Cant de Personas: 7, Precio: 400. Dto: null. Horario: 13:30 (Adicional 5%). Precio Base: 2800.', function() {
            expect(newReserva1.calcularPrecioBase()).to.equal(2800);
        });
        it('Cant de Personas: 7, Precio: 400. Dto: null. Horario: 13:30 (Adicional 5%). Precio Final: 2380.', function() {
            expect(newReserva1.calcularPrecioFinal()).to.equal(2380);
        });    

        var newReserva2 = new Reserva(new Date(2019, 2, 11, 18, 00), 7, 400, null);
        it('Cant de Personas: 7, Precio: 400. Dto: null. Horario: 18:00. Precio Base: 2800.', function() {
            expect(newReserva2.calcularPrecioBase()).to.equal(2800);
        });
        it('Cant de Personas: 7, Precio: 400. Dto: null. Horario: 18:00. Precio Final: 2520.', function() {
            expect(newReserva2.calcularPrecioFinal()).to.equal(2520);
        });

        var newReserva3 = new Reserva(new Date(2019, 2, 11, 20, 30), 7, 400, null);
        it('Cant de Personas: 7, Precio: 400. Dto: null. Horario: 20:30 (Adicional 5%). Devuelve: 2800.', function() {
            expect(newReserva3.calcularPrecioBase()).to.equal(2800);
        });
        it('Cant de Personas: 7, Precio: 400. Dto: null. Horario: 20:30 (Adicional 5%). Devuelve: 2380.', function() {
            expect(newReserva3.calcularPrecioFinal()).to.equal(2380);
        });  

        var newReserva4 = new Reserva(new Date(2019, 2, 11, 23, 00), 7, 400, null);
        it('Cant de Personas: 7, Precio: 400. Dto: null. Horario: 23:00. Devuelve: 2800.', function() {
            expect(newReserva4.calcularPrecioBase()).to.equal(2800);
        });
        it('Cant de Personas: 7, Precio: 400. Dto: null. Horario: 23:00. Devuelve: 2520.', function() {
            expect(newReserva4.calcularPrecioFinal()).to.equal(2520);
        });  
    });

    describe('Calcular Precio Base y Final. Dtos por grupos grandes (7 personas: 10% dto) mas Adicionales.', function() {
        var newReserva1 = new Reserva(new Date(2019, 2, 11, 18, 00), 7, 400, null);
        it('Cant de Personas: 7, Precio: 400. Dto: null. Dia: Lunes. Precio Base: 2800.', function() {
            expect(newReserva1.calcularPrecioBase()).to.equal(2800);
        });
        it('Cant de Personas: 7, Precio: 400. Dto: null. Dia: Lunes. Precio Final: 2520.', function() {
            expect(newReserva1.calcularPrecioFinal()).to.equal(2520);
        });    

        var newReserva2 = new Reserva(new Date(2019, 2, 11, 18, 00), 7, 400, null);
        it('Cant de Personas: 7, Precio: 400. Dto: null. Dia: Jueves. Precio Base: 2800.', function() {
            expect(newReserva2.calcularPrecioBase()).to.equal(2800);
        });
        it('Cant de Personas: 7, Precio: 400. Dto: null. Dia: Jueves. Precio Final: 2520.', function() {
            expect(newReserva2.calcularPrecioFinal()).to.equal(2520);
        });

        var newReserva3 = new Reserva(new Date(2019, 2, 15, 18, 00), 7, 400, null);
        it('Cant de Personas: 7, Precio: 400. Dto: null. Dia: Viernes (Adicional 10%). Devuelve: 2800.', function() {
            expect(newReserva3.calcularPrecioBase()).to.equal(2800);
        });
        it('Cant de Personas: 7, Precio: 400. Dto: null. Dia: Viernes (Adicional 10%). Devuelve: 2240.', function() {
            expect(newReserva3.calcularPrecioFinal()).to.equal(2240);
        });  

        var newReserva4 = new Reserva(new Date(2019, 2, 17, 18, 00), 7, 400, null);
        it('Cant de Personas: 7, Precio: 400. Dto: null. Dia: Domingo (Adicional 10%). Devuelve: 2800.', function() {
            expect(newReserva4.calcularPrecioBase()).to.equal(2800);
        });
        it('Cant de Personas: 7, Precio: 400. Dto: null. Dia: Domingo (Adicional 10%). Devuelve: 2240.', function() {
            expect(newReserva4.calcularPrecioFinal()).to.equal(2240);
        });  
    });
});
