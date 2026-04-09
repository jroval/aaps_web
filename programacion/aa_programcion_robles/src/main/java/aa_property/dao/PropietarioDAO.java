package aa_property.dao;

import aa_property.model.Propietario;
import aa_property.util.ConexionBD;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PropietarioDAO {

    public boolean insertarPropietario(Propietario propietario) {
        String sql = "INSERT INTO propietarios (nombre, apellidos, email, telefono) VALUES (?, ?, ?, ?)";

        try (Connection conexion = ConexionBD.conectar();
             PreparedStatement stmt = conexion.prepareStatement(sql)) {

            stmt.setString(1, propietario.getNombre());
            stmt.setString(2, propietario.getApellidos());
            stmt.setString(3, propietario.getEmail());
            stmt.setString(4, propietario.getTelefono());

            int filasAfectadas = stmt.executeUpdate();
            return filasAfectadas > 0;

        } catch (SQLException e) {
            System.out.println("Error al insertar propietario: " + e.getMessage());
            return false;
        }
    }

    public List<Propietario> listarPropietarios() {
        List<Propietario> lista = new ArrayList<>();
        String sql = "SELECT * FROM propietarios";

        try (Connection conexion = ConexionBD.conectar();
             Statement stmt = conexion.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Propietario propietario = new Propietario(
                        rs.getInt("id_propietario"),
                        rs.getString("nombre"),
                        rs.getString("apellidos"),
                        rs.getString("email"),
                        rs.getString("telefono")
                );
                lista.add(propietario);
            }

        } catch (SQLException e) {
            System.out.println("Error al listar propietarios: " + e.getMessage());
        }

        return lista;
    }
    public Propietario buscarPorId(int id) {
        String sql = "SELECT * FROM propietarios WHERE id_propietario = ?";

        try (Connection conexion = ConexionBD.conectar();
             PreparedStatement stmt = conexion.prepareStatement(sql)) {

            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                return new Propietario(
                        rs.getInt("id_propietario"),
                        rs.getString("nombre"),
                        rs.getString("apellidos"),
                        rs.getString("email"),
                        rs.getString("telefono")
                );
            }

        } catch (SQLException e) {
            System.out.println("Error al buscar propietario: " + e.getMessage());
        }

        return null;
    }

    public boolean actualizarPropietario(Propietario propietario) {
        String sql = "UPDATE propietarios SET nombre=?, apellidos=?, email=?, telefono=? WHERE id_propietario=?";

        try (Connection conexion = ConexionBD.conectar();
             PreparedStatement stmt = conexion.prepareStatement(sql)) {

            stmt.setString(1, propietario.getNombre());
            stmt.setString(2, propietario.getApellidos());
            stmt.setString(3, propietario.getEmail());
            stmt.setString(4, propietario.getTelefono());
            stmt.setInt(5, propietario.getIdPropietario());

            return stmt.executeUpdate() > 0;

        } catch (SQLException e) {
            System.out.println("Error al actualizar propietario: " + e.getMessage());
            return false;
        }
    }
    public boolean eliminarPropietario(int id) {
        String sql = "DELETE FROM propietarios WHERE id_propietario = ?";

        try (Connection conexion = ConexionBD.conectar();
             PreparedStatement stmt = conexion.prepareStatement(sql)) {

            stmt.setInt(1, id);

            return stmt.executeUpdate() > 0;

        } catch (SQLException e) {
            System.out.println("Error al eliminar propietario: " + e.getMessage());
            return false;
        }
    }
}
