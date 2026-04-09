package aa_property.model;

public class Villa {

    private int idVilla;
    private String codigoVilla;
    private String complejo;
    private String ubicacion;
    private Integer idPropietario;

    public Villa() {
    }

    public Villa(String codigoVilla, String complejo, String ubicacion, Integer idPropietario) {
        this.codigoVilla = codigoVilla;
        this.complejo = complejo;
        this.ubicacion = ubicacion;
        this.idPropietario = idPropietario;
    }

    public Villa(int idVilla, String codigoVilla, String complejo, String ubicacion, Integer idPropietario) {
        this.idVilla = idVilla;
        this.codigoVilla = codigoVilla;
        this.complejo = complejo;
        this.ubicacion = ubicacion;
        this.idPropietario = idPropietario;
    }

    public int getIdVilla() {
        return idVilla;
    }

    public void setIdVilla(int idVilla) {
        this.idVilla = idVilla;
    }

    public String getCodigoVilla() {
        return codigoVilla;
    }

    public void setCodigoVilla(String codigoVilla) {
        this.codigoVilla = codigoVilla;
    }

    public String getComplejo() {
        return complejo;
    }

    public void setComplejo(String complejo) {
        this.complejo = complejo;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public Integer getIdPropietario() {
        return idPropietario;
    }

    public void setIdPropietario(Integer idPropietario) {
        this.idPropietario = idPropietario;
    }

    @Override
    public String toString() {
        return "ID Villa: " + idVilla +
                " | Código: " + codigoVilla +
                " | Complejo: " + complejo +
                " | Ubicación: " + ubicacion +
                " | ID Propietario: " + idPropietario;
    }
}
