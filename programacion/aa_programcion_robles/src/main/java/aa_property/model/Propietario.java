package aa_property.model;

public class Propietario {
    private int idPropietario;
    private String nombre;
    private String apellidos;
    private String email;
    private String telefono;

    public Propietario() {
    }

    public Propietario(String nombre, String apellidos, String email, String telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
    }

    public Propietario(int idPropietario, String nombre, String apellidos, String email, String telefono) {
        this.idPropietario = idPropietario;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
    }

    public int getIdPropietario() {
        return idPropietario;
    }

    public void setIdPropietario(int idPropietario) {
        this.idPropietario = idPropietario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    @Override
    public String toString() {
        return "ID: " + idPropietario +
                " | Nombre: " + nombre +
                " | Apellidos: " + apellidos +
                " | Email: " + email +
                " | Teléfono: " + telefono;
    }

}
