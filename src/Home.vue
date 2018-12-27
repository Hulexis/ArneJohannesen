<template>
  <div class="background">
    <div class="home">
      <h1>Home</h1>

      <div class="grid">
        <app-grid-item>
          <app-clock></app-clock>
        </app-grid-item>

        <app-grid-item class='theRareBanan__add'>
          <h1 class="theRareBanan__text">My webpage: </h1>
          <a class="theRareBanan__link" href="https://www.therarebanana.com">
            <img class="theRareBanan__img" src="./assets/top-logo.png" alt="">
          </a>
        </app-grid-item>        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      page: "app-clock"
    }
  }
}
</script>

<style lang="scss">
  .background{
    display: flex;
    justify-content: center;
  }

  .home{
    width: 90%;
  }

  .grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  .grid-item{
    margin-right: 1%;
    height: 300px;

    &:last-child{
      margin-right: 0px;
    }
  }

  .theRareBanan__add{
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .theRareBanan__link{
    color: black;
    text-decoration: none;

    height: fit-content;
    height: -moz-fit-content;

    display: flex;
    flex-direction: column;
  } 

  .theRareBanan__text{
    font-size: 60px;
    margin: 0px;
  }

  .theRareBanan__img{
    height: 80px;
    
    background: black;
  }

  .grid__converter{
    grid-column: span 2;
  }
</style> 
