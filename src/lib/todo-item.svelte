<style>
    .wrapper{
       display: grid;
       grid-template-columns: 2rem 1fr 2rem;
       grid-gap: 0.5rem;
       align-items: center;
       margin: 0 0 0.5rem 0;
       padding: 0.5rem;
       background-color: white;
       border-radius: 8px;
       filter:drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
       transform: translate(-1px, -1px);
       transition: filter 0.2s transform 0.2s;
    }
    .wrapper button{
       width: 2em;
       height: 2em;
       border: none;
       background-color: transparent;
       background-position: 50% 50% ;
       background-repeat: no-repeat;
    }
    .wrapper input{
     flex: 1;
     padding: 0.5em 2em 0.5em 0.8em;
     border-radius: 3px;
    }
    .toggle{
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        box-sizing: border-box;
        background-size: 1em auto;
    }
    .text{
     position: relative;
     display: flex;
     align-items: center;
     flex: 1;
    }
    .save{
       position: absolute;
       right: 0;
       opacity: 0;
    }
    .wrapper input:focus + .save, .save:focus{
        transition: opacity 0.2s;
        opacity: 1;
        cursor: pointer;
    }
    .delete{
        opacity: 0.5;
    }
    .delete:hover, .delete:focus{
        transition: opacity 0.2s;
        opacity: 1;
        cursor: pointer;
    }
    .toggle{
        opacity: 0.5;
    }
    .toggle :focus ,.toggle:hover{
        transition: opacity 0.3s;
        opacity: 1;
        cursor: pointer;
    }
 </style>
 <div class="wrapper">
     <form action="" method="">
         <input type="hidden" name="done" value=""/>
         <button aria-label="Mark done/Not done" class="toggle"><i class="material-icons-outlined">
            done
         </i></button>
     </form>
     <form action="" method="" class="text">
           <input type="text"/>
           <button aria-label="Save todo" class="save">
               <i class="material-icons-outlined">
                   bookmark_add
               </i>
           </button>
     </form>
     <form action="" method="">
          <button aria-label="Delete todo" class="delete"><i class="material-icons-outlined">
            delete
          </i></button>
     </form>
 </div>