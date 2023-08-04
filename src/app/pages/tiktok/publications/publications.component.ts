import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { CommentsComponent } from "../comments/comments.component";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { PublicacioneServices } from "src/app/service/publicaciones.service";
import { Post } from "src/app/models/post.model";
import { CreatePostComponent } from "../create-post/create-post.component";
import { CommentsService } from "src/app/service/comments.service";
import { AlertsService } from "src/app/service/alerts.service";

@Component({
  selector: "app-publications",
  templateUrl: "./publications.component.html",
  styleUrls: ["./publications.component.scss"],
})
export class PublicationstComponent implements OnInit {
  // Declaración de variables de clase
  lengthPost: number = 0; // Variable para almacenar el total de publicaciones
  pageSize: number = 5; // Tamaño de página, determina cuántas publicaciones se muestran por página
  currentPage: number = 0; // Página actual, rastrea la página actual que se está mostrando
  posts: Post[] = []; // Arreglo para almacenar las publicaciones que se cargan

  scrollPosition = 0; // Variable para rastrear la posición de desplazamiento en la página

  // Variables para el control de carga y paginación
  loading = false; // Indica si se están cargando más publicaciones
  cargando = false; //

  loadPostsTimeout: any;
  currentVideoIndex = 0; // Variable para rastrear el índice del video actual

  // Referencia al elemento de video en el DOM, se utiliza con @ViewChild
  @ViewChild("videoElement") videoElement!: ElementRef;
  // Variable para rastrear el video actual que se está reproduciendo
  private currentPlayingVideo: HTMLVideoElement | null = null;

  // Constructor de la clase, se inyectan el servicio de diálogo (MatDialog) y el servicio de publicaciones (PublicacioneServices)
  constructor(
    public dialog: MatDialog,
    private postService: PublicacioneServices,
    private commentsService: CommentsService,
    private alertsService: AlertsService
  ) {}

  ngOnInit(): void {
    this.loadMorePosts(); // Cargar las primeras publicaciones al iniciar el componente
  }

  // Método para abrir el diálogo de comentarios, se muestra un cuadro de diálogo con los comentarios del post seleccionado
  comenOpen(post: Post) {
    // Objeto donde contiene las propiedad para el modal de comentarios
    const matDialogConfig: MatDialogConfig = {
      maxWidth: "400vw",
      maxHeight: "400vh",
      panelClass: "full-screen-dialog-comment-tokTik",
      data: post,
    };
    // Abriendo Modal
    const modalRef = this.dialog.open(CommentsComponent, matDialogConfig);
    modalRef.afterClosed().subscribe((result) => {});
  }

  // Método para abrir el diálogo para crear una nueva publicación
  addPost() {
    const modalRef = this.dialog.open(CreatePostComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "full-screen-dialog-comment-tokTik",
    });
    modalRef.afterClosed().subscribe((result) => {
      this.posts = []; // Limpiar el arreglo de publicaciones para cargar nuevos datos
      this.getAllPostPage(0, 1); // 100 posts por carga--SE DEBE CAMBIAR
    });
  }

  // Método para obtener todas las publicaciones de una página específica y mostrarlas en el componente
  getAllPostPage(page: number, size: number) {
    console.log(page, size);
    this.postService.findAllPostTokTikPage(page, size).subscribe({
      next: (data) => {
        this.lengthPost = data.count;
        this.posts = this.posts.concat(data.list); // Concatenar los nuevos posts al final del array existente

        // Agregar eventos 'loadeddata' a todos los videos
        this.addVideoLoadedDataEvents();

        // Realizar el desplazamiento hacia el video recién cargado
        this.scrollToNextVideo();
      },
    });
  }

  // Método para agregar eventos 'loadeddata' a todos los videos
  addVideoLoadedDataEvents() {
    // Esperar a que se carguen todos los videos y luego agregar los eventos 'loadeddata'
    // Esto asegura que los eventos se agreguen a todos los videos después de que se han renderizado en el DOM
    setTimeout(() => {
      const videoElements = document.querySelectorAll(
        ".video"
      ) as NodeListOf<HTMLVideoElement>;
      videoElements.forEach((video) => {
        video.addEventListener("loadeddata", this.onVideoLoaded.bind(this));
      });
    }, 15);
  }

  // Método que se ejecuta cuando un video se ha cargado
  onVideoLoaded(event: Event) {
    const targetVideo = event.target as HTMLVideoElement;
    targetVideo.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  // Método para realizar el desplazamiento hacia el video actual
  scrollToNextVideo() {
    if (this.videoElement && this.videoElement.nativeElement) {
      this.videoElement.nativeElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Método para cargar más publicaciones
  loadMorePosts() {
    if (!this.loading) {
      this.loading = true;
      this.getAllPostPage(this.currentPage, 1); // 100 posts por carga--SE DEBE CAMBIAR
      this.currentPage++; // Avanzamos al siguiente grupo de 5 posts
      this.currentVideoIndex = this.posts.length - 1; // Actualizar el índice al final del array

      this.loading = false;
    }
  }

  // Método para manejar el evento de hacer clic en el botón 'LIKE' de una publicación
  toggleLike(row) {
    console.log(row);
    if (row.liked) {
      console.log("Restando likes");
      // this.postLiked=false;
      row.liked = false;
      row.numLike--;
      this.subtractLike(row.idPost);
    } else {
      // this.postLiked=true;
      row.numLike++;
      row.liked = true;
      console.log("Sumando like");
      this.sumLike(row.idPost);
    }
  }

  // Método para restar likes de una publicación
  subtractLike(id) {
    this.postService.subtractLike(id).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  // Método para sumar likes a una publicación
  sumLike(id) {
    this.postService.sumLike(id).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  // Método que se ejecuta cuando se inicia la reproducción de un video
  onVideoPlay(event: Event) {
    const targetVideo = event.target as HTMLVideoElement;

    // Si hay un video reproduciéndose actualmente, lo detenemos
    if (this.currentPlayingVideo && this.currentPlayingVideo !== targetVideo) {
      this.currentPlayingVideo.pause();
    }

    // Asignamos el video actual como el video que se está reproduciendo
    this.currentPlayingVideo = targetVideo;
  }
 
}
