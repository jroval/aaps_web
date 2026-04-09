package aa_property;

import aa_property.dao.PropietarioDAO;
import aa_property.model.Propietario;
import aa_property.dao.VillaDAO;
import aa_property.model.Villa;
import aa_property.dao.IncidenciaDAO;
import aa_property.model.Incidencia;
import java.sql.Date;

import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        PropietarioDAO propietarioDAO = new PropietarioDAO();
        VillaDAO villaDAO = new VillaDAO();
        IncidenciaDAO incidenciaDAO = new IncidenciaDAO();

        int opcion;

        do {
            System.out.println("\n==============================");
            System.out.println(" AA PROPERTY SERVICES");
            System.out.println("==============================");
            System.out.println("1. Añadir propietario");
            System.out.println("2. Listar propietarios");
            System.out.println("3. Buscar propietario por ID");
            System.out.println("4. Actualizar propietario");
            System.out.println("5. Eliminar propietario");
            System.out.println("6. Añadir villa");
            System.out.println("7. Listar villas");
            System.out.println("8. Buscar villa por ID");
            System.out.println("9. Actualizar villa");
            System.out.println("10. Eliminar villa");
            System.out.println("11. Crear incidencia");
            System.out.println("12. Listar incidencias");
            System.out.println("13. Buscar incidencia por ID");
            System.out.println("14. Listar incidencias de una villa");
            System.out.println("15. Cambiar estado de incidencia");
            System.out.println("16. Eliminar incidencia");
            System.out.println("0. Salir");
            System.out.print("Elige una opción: ");

            opcion = Integer.parseInt(sc.nextLine());

            switch (opcion) {
                case 1:
                    System.out.print("Nombre: ");
                    String nombre = sc.nextLine();

                    System.out.print("Apellidos: ");
                    String apellidos = sc.nextLine();

                    System.out.print("Email: ");
                    String email = sc.nextLine();

                    System.out.print("Teléfono: ");
                    String telefono = sc.nextLine();

                    Propietario propietario = new Propietario(nombre, apellidos, email, telefono);

                    if (propietarioDAO.insertarPropietario(propietario)) {
                        System.out.println("Propietario añadido correctamente.");
                    } else {
                        System.out.println("No se pudo añadir el propietario.");
                    }
                    break;

                case 2:
                    List<Propietario> lista = propietarioDAO.listarPropietarios();

                    if (lista.isEmpty()) {
                        System.out.println("No hay propietarios registrados.");
                    } else {
                        System.out.println("\n--- LISTADO DE PROPIETARIOS ---");
                        for (Propietario p : lista) {
                            System.out.println(p);
                        }
                    }
                    break;

                case 3:
                    System.out.print("Introduce ID: ");
                    int idBuscar = Integer.parseInt(sc.nextLine());

                    Propietario encontrado = propietarioDAO.buscarPorId(idBuscar);

                    if (encontrado != null) {
                        System.out.println(encontrado);
                    } else {
                        System.out.println("No encontrado.");
                    }
                    break;




                case 4:
                    System.out.print("ID del propietario a actualizar: ");
                    int idActualizar = Integer.parseInt(sc.nextLine());

                    Propietario p = propietarioDAO.buscarPorId(idActualizar);

                    if (p != null) {
                        System.out.print("Nuevo nombre: ");
                        p.setNombre(sc.nextLine());

                        System.out.print("Nuevo apellido: ");
                        p.setApellidos(sc.nextLine());

                        System.out.print("Nuevo email: ");
                        p.setEmail(sc.nextLine());

                        System.out.print("Nuevo teléfono: ");
                        p.setTelefono(sc.nextLine());

                        if (propietarioDAO.actualizarPropietario(p)) {
                            System.out.println("Actualizado correctamente.");
                        } else {
                            System.out.println("Error al actualizar.");
                        }
                    } else {
                        System.out.println("No existe ese propietario.");
                    }
                    break;

                case 5:
                    System.out.print("ID del propietario a eliminar: ");
                    int idEliminar = Integer.parseInt(sc.nextLine());

                    if (propietarioDAO.eliminarPropietario(idEliminar)) {
                        System.out.println("Eliminado correctamente.");
                    } else {
                        System.out.println("Error al eliminar.");
                    }
                    break;

                case 6:
                    System.out.print("Código de la villa: ");
                    String codigoVilla = sc.nextLine();

                    System.out.print("Complejo: ");
                    String complejo = sc.nextLine();

                    System.out.print("Ubicación: ");
                    String ubicacion = sc.nextLine();

                    System.out.print("ID del propietario (o vacío si no tiene): ");
                    String idPropietarioTexto = sc.nextLine();

                    Integer idPropietario = null;
                    if (!idPropietarioTexto.isEmpty()) {
                        idPropietario = Integer.parseInt(idPropietarioTexto);
                    }

                    Villa nuevaVilla = new Villa(codigoVilla, complejo, ubicacion, idPropietario);

                    if (villaDAO.insertarVilla(nuevaVilla)) {
                        System.out.println("Villa añadida correctamente.");
                    } else {
                        System.out.println("No se pudo añadir la villa.");
                    }
                    break;

                case 7:
                    List<Villa> villas = villaDAO.listarVillas();

                    if (villas.isEmpty()) {
                        System.out.println("No hay villas registradas.");
                    } else {
                        System.out.println("\n--- LISTADO DE VILLAS ---");
                        for (Villa v : villas) {
                            System.out.println(v);
                        }
                    }
                    break;

                case 8:
                    System.out.print("Introduce ID de la villa: ");
                    int idBuscarVilla = Integer.parseInt(sc.nextLine());

                    Villa villaEncontrada = villaDAO.buscarVillaPorId(idBuscarVilla);

                    if (villaEncontrada != null) {
                        System.out.println(villaEncontrada);
                    } else {
                        System.out.println("No se encontró la villa.");
                    }
                    break;

                case 9:
                    System.out.print("ID de la villa a actualizar: ");
                    int idActualizarVilla = Integer.parseInt(sc.nextLine());

                    Villa villaActualizar = villaDAO.buscarVillaPorId(idActualizarVilla);

                    if (villaActualizar != null) {
                        System.out.print("Nuevo código de villa: ");
                        villaActualizar.setCodigoVilla(sc.nextLine());

                        System.out.print("Nuevo complejo: ");
                        villaActualizar.setComplejo(sc.nextLine());

                        System.out.print("Nueva ubicación: ");
                        villaActualizar.setUbicacion(sc.nextLine());

                        System.out.print("Nuevo ID del propietario (o vacío si no tiene): ");
                        String nuevoIdPropietarioTexto = sc.nextLine();

                        if (!nuevoIdPropietarioTexto.isEmpty()) {
                            villaActualizar.setIdPropietario(Integer.parseInt(nuevoIdPropietarioTexto));
                        } else {
                            villaActualizar.setIdPropietario(null);
                        }

                        if (villaDAO.actualizarVilla(villaActualizar)) {
                            System.out.println("Villa actualizada correctamente.");
                        } else {
                            System.out.println("Error al actualizar la villa.");
                        }
                    } else {
                        System.out.println("No existe esa villa.");
                    }
                    break;

                case 10:
                    System.out.print("ID de la villa a eliminar: ");
                    int idEliminarVilla = Integer.parseInt(sc.nextLine());

                    if (villaDAO.eliminarVilla(idEliminarVilla)) {
                        System.out.println("Villa eliminada correctamente.");
                    } else {
                        System.out.println("Error al eliminar la villa.");
                    }
                    break;

                case 11:
                    System.out.print("Título de la incidencia: ");
                    String titulo = sc.nextLine();

                    System.out.print("Descripción: ");
                    String descripcion = sc.nextLine();

                    System.out.print("Fecha de creación (YYYY-MM-DD): ");
                    Date fechaCreacion = Date.valueOf(sc.nextLine());

                    System.out.print("Estado (PENDIENTE / EN_PROCESO / RESUELTA): ");
                    String estado = sc.nextLine();

                    System.out.print("ID de la villa: ");
                    int idVilla = Integer.parseInt(sc.nextLine());

                    Incidencia nuevaIncidencia = new Incidencia(titulo, descripcion, fechaCreacion, estado, idVilla);

                    if (incidenciaDAO.insertarIncidencia(nuevaIncidencia)) {
                        System.out.println("Incidencia creada correctamente.");
                    } else {
                        System.out.println("No se pudo crear la incidencia.");
                    }
                    break;

                case 12:
                    List<Incidencia> incidencias = incidenciaDAO.listarIncidencias();

                    if (incidencias.isEmpty()) {
                        System.out.println("No hay incidencias registradas.");
                    } else {
                        System.out.println("\n--- LISTADO DE INCIDENCIAS ---");
                        for (Incidencia i : incidencias) {
                            System.out.println(i);
                        }
                    }
                    break;

                case 13:
                    System.out.print("Introduce ID de la incidencia: ");
                    int idBuscarIncidencia = Integer.parseInt(sc.nextLine());

                    Incidencia incidenciaEncontrada = incidenciaDAO.buscarIncidenciaPorId(idBuscarIncidencia);

                    if (incidenciaEncontrada != null) {
                        System.out.println(incidenciaEncontrada);
                    } else {
                        System.out.println("No se encontró la incidencia.");
                    }
                    break;

                case 14:
                    System.out.print("Introduce ID de la villa: ");
                    int idVillaBuscar = Integer.parseInt(sc.nextLine());

                    List<Incidencia> incidenciasVilla = incidenciaDAO.listarIncidenciasPorVilla(idVillaBuscar);

                    if (incidenciasVilla.isEmpty()) {
                        System.out.println("No hay incidencias para esa villa.");
                    } else {
                        System.out.println("\n--- INCIDENCIAS DE LA VILLA ---");
                        for (Incidencia i : incidenciasVilla) {
                            System.out.println(i);
                        }
                    }
                    break;

                case 15:
                    System.out.print("ID de la incidencia: ");
                    int idActualizarEstado = Integer.parseInt(sc.nextLine());

                    System.out.print("Nuevo estado (PENDIENTE / EN_PROCESO / RESUELTA): ");
                    String nuevoEstado = sc.nextLine();

                    if (incidenciaDAO.actualizarEstadoIncidencia(idActualizarEstado, nuevoEstado)) {
                        System.out.println("Estado actualizado correctamente.");
                    } else {
                        System.out.println("No se pudo actualizar el estado.");
                    }
                    break;

                case 16:
                    System.out.print("ID de la incidencia a eliminar: ");
                    int idEliminarIncidencia = Integer.parseInt(sc.nextLine());

                    if (incidenciaDAO.eliminarIncidencia(idEliminarIncidencia)) {
                        System.out.println("Incidencia eliminada correctamente.");
                    } else {
                        System.out.println("Error al eliminar la incidencia.");
                    }
                    break;

                case 0:
                    System.out.println("Saliendo del programa...");
                    break;

                default:
                    System.out.println("Opción no válida.");

            }

        } while (opcion != 0);

        sc.close();
    }
}