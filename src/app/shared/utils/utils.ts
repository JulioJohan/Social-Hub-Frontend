
export class Utils{

  public static isValidUrl(url: string): boolean {
        // Utiliza una expresión regular para verificar si es un enlace válido
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // Protocolo
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // Dominio
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // IP (por ejemplo: 192.168.0.1)
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // Puerto y ruta
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // Parámetros de consulta
          '(\\#[-a-z\\d_]*)?$','i'); // Fragmento
      
        return !!pattern.test(url);
      }
      


}