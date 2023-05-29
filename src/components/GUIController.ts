import { Scene } from "babylonjs";
import { ModelComponent } from "./models/modelComponent";

export class GUIController {
    private modelComponent: ModelComponent;
   
    constructor(scene: Scene) {
      this.modelComponent = new ModelComponent(scene)
      this.handleClick = this.handleClick.bind(this);
      this.setupButtons();

    }
  
    handleClick(event: MouseEvent): void {
      const slogan = document.getElementById('slogan')
      const name = document.getElementById('name')
      const description = document.getElementById('description')
      const fadeInDuration = 500; // Fade in duration in milliseconds
      const fadeOutDuration = 500; // Fade out duration in milliseconds

      
      const ipodClassic = {
        folder: '/public/models/',
        filePath: 'ipod-classic.glb',
        slogan: `"1,000 songs in your pocket"`,
        name: "iPod Classic",
        description: 'The iPod Classic, introduced in 2001 with the slogan "1,000 songs in your pocket," revolutionized the portable music industry. It offered a sleek and compact design, featuring the iconic click wheel interface. As the first iPod model, it laid the foundation for the entire lineup and captured the imagination of music lovers worldwide, becoming a cultural phenomenon.'
      }
      const ipodNano = {
        folder: '/public/models/',
        filePath: 'ipod-nano.glb',
        slogan: `"The small iPod with a big idea."`,
        name: "iPod Nano",
        description: `With the slogan "The small iPod with a big idea," the iPod Nano made its debut in 2005. This compact and lightweight music player boasted a color screen and brought a new level of portability. Its sleek design, vibrant display, and ability to play music, videos, and games made it immensely popular. The iPod Nano's small size and stylish appearance cemented its iconic status.`
      }
      const ipodShuffle = {
        folder: '/public/models/',
        filePath: 'ipod-shuffle.glb',
        slogan: `"Life is random."`,
        name: "iPod Shuffle",
        description: `The iPod Shuffle, released in 2005 and marketed with the slogan "Life is random," offered a minimalist music experience. By removing the screen, Apple emphasized simplicity and portability. Users loved the element of surprise in their music playback, thanks to the shuffle feature. Its compact design and convenient clip-on feature made it a go-to choice for workouts or casual use, earning its iconic status.`
      }
      const ipodTouch = {
        folder: '/public/models/',
        filePath: 'ipod-touch.glb',
        slogan: `"The funnest iPod ever."`,
        name: "iPod Touch",
        description: `Introduced in 2007 with the slogan "The funnest iPod ever," the iPod Touch transformed the iPod lineup. It featured a touchscreen interface, access to the App Store, and multimedia capabilities beyond music. The iPod Touch became a versatile entertainment device, appealing to users with its gaming capabilities, advanced features, and app ecosystem. Its impact on the iPod series and its versatility solidified its iconic status.`
      }
      const ipodMini = {
        folder: '/public/models/',
        filePath: 'ipod-mini.glb',
        slogan: `"A little goes a long way."`,
        name: "iPod Mini",
        description: `Launched in 2004 with the slogan "A little goes a long way," the iPod Mini was a smaller and more colorful version of the original iPod. It showcased a vibrant anodized aluminum casing and offered a more affordable option with reduced storage capacity. The iPod Mini made a fashion statement with its stylish and portable design, playing a pivotal role in shaping subsequent iPod models and establishing its own iconic status.`
      }
      
  
      
      console.log(event.target);
      const targetElement = event.target as HTMLElement
      if(targetElement.id === "ipod-classic") {
        if (this.modelComponent.isModelLoading) {
          return; // Do nothing if a model is already being loaded
        }
        this.modelComponent.removeAllModels()
        this.modelComponent.loadModel(ipodClassic.folder, ipodClassic.filePath)
        fadeOutElement(slogan!, fadeOutDuration, () => {
          slogan!.innerText = ipodClassic.slogan;
          fadeInElement(slogan!, fadeInDuration);
        });
  
        fadeOutElement(name!, fadeOutDuration, () => {
          name!.innerText = ipodClassic.name;
          fadeInElement(name!, fadeInDuration);
        });
  
        fadeOutElement(description!, fadeOutDuration, () => {
          description!.innerText = ipodClassic.description;
          fadeInElement(description!, fadeInDuration);
        });
        
      }
      if(targetElement.id === "ipod-nano") {
        if (this.modelComponent.isModelLoading) {
          return; // Do nothing if a model is already being loaded
        }
        this.modelComponent.removeAllModels()
        this.modelComponent.loadModel(ipodNano.folder, ipodNano.filePath)
        fadeOutElement(slogan!, fadeOutDuration, () => {
          slogan!.innerText = ipodNano.slogan;
          fadeInElement(slogan!, fadeInDuration);
        });
  
        fadeOutElement(name!, fadeOutDuration, () => {
          name!.innerText = ipodNano.name;
          fadeInElement(name!, fadeInDuration);
        });
  
        fadeOutElement(description!, fadeOutDuration, () => {
          description!.innerText = ipodNano.description;
          fadeInElement(description!, fadeInDuration);
        });
       
      }
      if(targetElement.id === "ipod-shuffle") {
        if (this.modelComponent.isModelLoading) {
          return; // Do nothing if a model is already being loaded
        }
        this.modelComponent.removeAllModels()
        this.modelComponent.loadModel(ipodShuffle.folder, ipodShuffle.filePath)
        fadeOutElement(slogan!, fadeOutDuration, () => {
          slogan!.innerText = ipodShuffle.slogan;
          fadeInElement(slogan!, fadeInDuration);
        });
  
        fadeOutElement(name!, fadeOutDuration, () => {
          name!.innerText = ipodShuffle.name;
          fadeInElement(name!, fadeInDuration);
        });
  
        fadeOutElement(description!, fadeOutDuration, () => {
          description!.innerText = ipodShuffle.description;
          fadeInElement(description!, fadeInDuration);
        });
    
      }
      if(targetElement.id === "ipod-touch") {
        if (this.modelComponent.isModelLoading) {
          return; // Do nothing if a model is already being loaded
        }
        this.modelComponent.removeAllModels()
        this.modelComponent.loadModel(ipodTouch.folder, ipodTouch.filePath)
        fadeOutElement(slogan!, fadeOutDuration, () => {
          slogan!.innerText = ipodTouch.slogan;
          fadeInElement(slogan!, fadeInDuration);
        });
  
        fadeOutElement(name!, fadeOutDuration, () => {
          name!.innerText = ipodTouch.name;
          fadeInElement(name!, fadeInDuration);
        });
  
        fadeOutElement(description!, fadeOutDuration, () => {
          description!.innerText = ipodTouch.description;
          fadeInElement(description!, fadeInDuration);
        });
       
      }
      if(targetElement.id === "ipod-mini") {
        if (this.modelComponent.isModelLoading) {
          return; // Do nothing if a model is already being loaded
        }
        this.modelComponent.removeAllModels()
        this.modelComponent.loadModel(ipodMini.folder, ipodMini.filePath)
        fadeOutElement(slogan!, fadeOutDuration, () => {
          slogan!.innerText = ipodMini.slogan;
          fadeInElement(slogan!, fadeInDuration);
        });
  
        fadeOutElement(name!, fadeOutDuration, () => {
          name!.innerText = ipodMini.name;
          fadeInElement(name!, fadeInDuration);
        });
  
        fadeOutElement(description!, fadeOutDuration, () => {
          description!.innerText = ipodMini.description;
          fadeInElement(description!, fadeInDuration);
        });
     
      }
      
    }
  
    setupButtons(): void {
        const buttons = document.getElementsByClassName('btn');
      
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener('click', (event: any) => this.handleClick(event));
        }
      }
  }

  function fadeInElement(element: HTMLElement, duration: number): void {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = '1';
  }
  
  function fadeOutElement(element: HTMLElement, duration: number, callback: () => void): void {
    element.style.opacity = '1';
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = '0';
  
    setTimeout(callback, duration);
  }