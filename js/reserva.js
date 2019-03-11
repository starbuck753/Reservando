var Reserva = function(horario, cantPersonas, precioPersona, codigoDto) {
    this.horario = horario;
    this.cantPersonas = cantPersonas;
    this.precioPersona = precioPersona;
    this.codigoDto = codigoDto;
}

Reserva.prototype.calcularPrecioBase = function() {
    return this.cantPersonas * this.precioPersona;
}

Reserva.prototype.calcularPrecioFinal = function() {
    var precioBase = this.calcularPrecioBase();
    var dto = this.calcularDto(precioBase);
    var adicional = this.calcularAdicional(precioBase);

    return precioBase - (dto + adicional);
}

Reserva.prototype.calcularDto = function(precioBase) {
    var dto = 0;

    switch (this.codigoDto) {
        case "DES15":
            dto = precioBase * 15 / 100;
            break;
        case "DES200":
            dto = 200;
            break;
        case "DES1":
            dto = this.precioPersona;
            break;
        default:
            dto = 0;
            break;
    }

    if (this.cantPersonas >= 4 && this.cantPersonas <= 6) {
        dto += precioBase * 5 / 100;
    } else if (this.cantPersonas >= 7 && this.cantPersonas <= 8) {
        dto += precioBase * 10 / 100;
    } else if (this.cantPersonas > 8) {
        dto += precioBase * 15 / 100;
    }

    return dto;
}

Reserva.prototype.calcularAdicional = function(precioBase) {
    var dto = 0;

    if (this.horario.getHours() >= 13 && this.horario.getHours() <= 14) {
        dto = precioBase * 5 / 100;
    } else if (this.horario.getHours() >= 20 && this.horario.getHours() <= 21) {
        dto = precioBase * 5 / 100;
    }

    if (this.horario.getDay() >= 5 || this.horario.getDay() == 0) {
        dto += precioBase * 10 / 100;
    }

    return dto;
}