import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { usePlayer } from "@empirica/core/player/classic/react";
import { useRef } from "react";

export function SalesResults({roundNumber}) {
  console.log('calculating advertiser score');
  const player = usePlayer();
  const roundNumberText = 'round' + roundNumber;
  
  //const adQuality = player.get("adQuality");
  const productionQuality = player.get(roundNumberText.concat("_choices"))[0]
  const advertisementQuality = player.get(roundNumberText.concat("_choices"))[2]
  const priceOfProduct = player.get(roundNumberText.concat("_choices"))[3]
  const productionCost = player.get(roundNumberText.concat("_choices"))[4]
  const warrantCost = player.get(roundNumberText.concat("_choices"))[5]   
  let imageUrl = "";
  //console.log('roundNumberText', roundNumberText)
  if (advertisementQuality === "high") {
    imageUrl = "/images/toothpaseamazing.jpg"; // Replace with the actual URL for high quality
  } else if (advertisementQuality === "low") {
    imageUrl = "/images/toothpastestandard.jpg"; // Replace with the actual URL for low quality
  }

  const currentScore = player.get("score") || 0; // , adQuality, points, salesCount, numBuyers
  
  //let points = 10;
  let points = priceOfProduct

  let min = 10;
  let max = 90;
  let reportedChance = Math.random()
  let reported = false;
  
  // can only report if advertising is high, warrantCost is 2, and quality is low
  switch (advertisementQuality) {
    case "high":
      console.log(advertisementQuality, points, warrantCost)
      if (productionQuality == "high") { // high quality product
        if(warrantCost === 2){
          min = 60
          max = 80
          console.log(min, max)
        }
        else {
          min = 40
          max = 60
          console.log(min, max)

        }

      } else { // low quality product
        if(warrantCost === 2) {
          min = 70;
          max = 90;
          console.log(min, max)
          if(reportedChance > 0.5) {
            reported = true
          }

        }
        else {
          min = 50
          max = 70
          console.log(min, max)

        }
      }
      break;
    case "low":
      if (points > 10) {
        min = 10;
        max = 20;
        console.log(min, max)

      } else {
        min = 50;
        max = 80;
        console.log(min, max)

      }
      break;
    default:
      break;
  }
  console.log(min, max)
  console.log(advertisementQuality, reported, reportedChance)
  const numBuyers = Math.floor(Math.random() * (max - min) + min);
  
  let finalScore = 0
  let fined = 0

  const salesCount = numBuyers * (priceOfProduct - productionCost - warrantCost);
  

  if(priceOfProduct == 10) {
    fined = 2 * numBuyers
  } else {
    fined = 3 * numBuyers;
  }

  if(reported){
    finalScore = currentScore - fined
  } else {
    finalScore = salesCount + currentScore
  }

  function handleSubmit() {
    console.log('Moving on from results round');
    player.stage.set("submit", true);
    player.set("score", finalScore);
  }
  
  return (
    <div className="mt-3 sm:mt-5 p-20">
      <h1 className="text-lg leading-6 font-medium text-gray-900">
        Sales
      </h1>
      <div className="text-lg mt-2 mb-6">
        {/* <p className="text-sm text-gray-500"> */}
        <p>
          You chose to produce a <b>{productionQuality}</b> quality product.
        </p>
        <p>
          You chose to advertise it as a <b>{advertisementQuality}</b> quality product.
        <p>
          You chose to spend <b>{warrantCost}</b> on a warrant.
        </p>
        You sold it at a price of <b>${priceOfProduct}</b>.
        <br/> <br/>
        </p>
        <p>
          It was advertised to an audience of 100 users, and {numBuyers} users bought your product.
        </p>
        <img src={imageUrl} alt="Toothpaste Standard" width="250" height="250"/>
        {console.log(imageUrl)}
      

        {reported ? (
          <>
            <p>
              Oh no! Someone has challenged your warrant and now you have to pay a fine! 
            </p><br/>
            <p>
              You are being charged ${fined} in total fines
            </p>
            <p>
              Your fine for this round is: {fined}
            </p>
            <p>
              Your total score is: {finalScore}
            </p>
            <p> 
              Click to proceed to the next round to sell products in this marketplace.
            </p>
          </>
        ) : (
          <>
            <p> 
              You earned ${priceOfProduct - productionCost - warrantCost} per product x {numBuyers} units sold = {salesCount} points in sales.
            </p><br/>
            <p> Your score for this round is: {salesCount} </p>
            <p> Your total score is: {finalScore} </p><br/>
            <p> 
              Click to proceed to the next round to sell products in this marketplace.
            </p>
          </>
        )}
      </div>
      <Button handleClick={handleSubmit} primary>
        I'm done! 
      </Button>
    </div>
  );
}