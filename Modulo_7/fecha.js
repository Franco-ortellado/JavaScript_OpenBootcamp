const fecha_hoy = new Date();

const fecha_nacimiento = new Date(1997, 04, 20);

const tarde = fecha_hoy > fecha_nacimiento;

const dia_nacimiento = fecha_nacimiento.getDay();

const mes_nacimiento = fecha_nacimiento.getMonth() + 1;

const anyo_nacimiento = fecha_nacimiento.getFullYear();
