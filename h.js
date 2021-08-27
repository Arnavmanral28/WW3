if(bulletGroup.isTouching(player)||trapGroup.isTouching(player)||player.isTouching(cyborg10)||player.isTouching(cyborg11)||player.isTouching(cyborg12)||player.isTouching(cyborg13)||player.isTouching(cyborg14)||player.isTouching(cyborg15)||player.isTouching(cyborg16)||player.isTouching(spike1)||player.isTouching(spike2)||player.isTouching(spike3)||player.isTouching(spike4)||player.isTouching(spike5)||player.isTouching(spike6)){
    playerLifeLine = playerLifeLine-1
    player.x = 400
    player.y = windowHeight/2+280

    bulletGroup.setVelocityXEach(0);
    trapGroup.setVelocityXEach(0); 
    fighterjetsGroup.setVelocityXEach(0) 
    medikitGroup.setVelocityEach(0)

    bulletGroup.setLifetimeEach(-1); 
    trapGroup.setLifetimeEach(-1);
    fighterjetsGroup.setLifetimeEach(-1);
    medikitGroup.setLifetimeEach(-1)

    bulletGroup.destroyEach();
    trapGroup.destroyEach();
    fighterjetsGroup.destroyEach()
    medikitGroup.destroyEach();
}

