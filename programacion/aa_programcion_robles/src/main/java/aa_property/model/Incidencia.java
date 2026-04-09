package aa_property.model;

import java.sql.Date;

public class Incidencia {

    private int idIncidencia;
    private String titulo;
    private String descripcion;
    private Date fechaCreacion;
    private String estado;
    private int idVilla;

    public Incidencia() {
    }

    public Incidencia(String titulo, String descripcion, Date fechaCreacion, String estado, int idVilla) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.estado = estado;
        this.idVilla = idVilla;
    }

    public Incidencia(int idIncidencia, String titulo, String descripcion, Date fechaCreacion, String estado, int idVilla) {
        this.idIncidencia = idIncidencia;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.estado = estado;
        this.idVilla = idVilla;
    }

    public int getIdIncidencia() {
        return idIncidencia;
    }

    public void setIdIncidencia(int idIncidencia) {
        this.idIncidencia = idIncidencia;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public int getIdVilla() {
        return idVilla;
    }

    public void setIdVilla(int idVilla) {
        this.idVilla = idVilla;
    }

    @Override
    public String toString() {
        return "ID Incidencia: " + idIncidencia +
                " | Título: " + titulo +
                " | Descripción: " + descripcion +
                " | Fecha: " + fechaCreacion +
                " | Estado: " + estado +
                " | ID Villa: " + idVilla;
    }
}
