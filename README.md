The warrant changes are inside the base_producer_experiment directory!

All you need to run the code are these steps:

1. cd base_producer_experiment
2. Install Empirica
3. Go to client -- npm install
4. Go to server -- npm install
5. Start the empirica server

Most of my changes are made within the advertise.jsx and results.jsx file! I hope you liked my take on the warrants feature that I have implemented!


## My Short Answer Responses:

# Short Answer (500 words): Discuss how you would plan the feature including any designs, references, links to resources you’ve used to determine the best way to develop such a feature.
This design requires careful consideration of how each variable, such as customer acquisition cost, risk of challenge if the product is subpar, number of buyers reached, etc, can be affected from adding or not adding a warrant. All of these small details must be examined when planning  such a feature. 

Starting off with aesthetics and layout in the Advertise.jsx file, it is important that it fits nicely with the rest of the experiment components. Nothing should stand out from the rest of the simulation, because then the users may become suspicious or act unnaturally. When inserting a new component into the page, things may be shifted around, so addressing those changes by updating the CSS is necessary. Because warrants only apply to products that are advertised as “high quality,” the warrant section should only appear when a user selects the high quality advertisement to enhance space and memory efficiency. Meaning, when a user selects a low quality advertisement, they don’t have to waste time choosing a warrant since that option is not there for them because there is no benefit with granting a warrant to  a product that is supposed to be mediocre. 

For simplicity the warrant feature should only present the user with two options: $0 in warrants, or a certain, set amount of money in warrants. A sliding scale may be a possibility for choosing how much money a user would want to put in for a warrant in a given range, but the user may not understand the significance in having a multitude of dollar options. What is most important is whether the user would want to install a warrant or not for a given product, rather than the actual dollar amount being put in. 

In terms of how warrants affect the score, there are many different factors to keep track of, and a multitude of combinations involving price of product, warrant or no warrant, and advertisement quality which may affect the number of buyers, thus also affecting the score. For example, a product with high product quality, advertised highly, and costs highly without a warrant would not be as appealing to buyers compared to that same product but with a warrant installed, meaning that the product with the warrant would have a larger reach of people, but also have less profit margin. 

However, a product with low product quality, advertised highly, costs highly without a warrant, would provide the most profit margin, but also pose a risk of being challenged, thus meaning the producer has a chance of losing money. To implement these ideas, a switch case with the “advertisement quality” as the conditional is best. The different product possibilities can be illustrated using various if statements within each switch case. Also, it’s important to have another variable to store the “fines” that one may have if they are challenged. The risk should be 50/50 so that if users want to get the highest profit possible, they may want to risk adding a warrant to a lower quality product. 

For the multiplayer mode of the game, the feature would be similar from the user side, but instead of having a randomized chance of the warrant being challenged, the warrant can be challenged by other players. However, it costs money to challenge, so players must err on the side of caution and not challenge when unnecessary. That is how I would plan and design the warrant feature! 





# Short Answer (500 words): Discuss why this feature is reflective of a real-world marketplace and what kind of trade-offs you would want to consider to make this feature easy for users to employ.
The warrant feature, more specifically the ability for producers to add a monetary claim to their advertisements, mirrors several aspects of real-world marketplaces. It emulates the concept of warranties and guarantees, which are pivotal in establishing the trust of consumers. These assurances serve as sellers' and buyers' promises regarding product quality and customer satisfaction. In another sense, the warrant acts as a trust-building tool in the virtual marketplace, indicating the producer's confidence in their product.

The feature also reflects the competitive dynamics of markets. Just as businesses in the real world monitor and sometimes challenge their competitors' advertising claims to ensure fair play, the warrant feature in this experiment acts as those similar checks and balances. This aspect fosters a competitive yet fair marketplace environment that resembles one of society's marketplaces. 

Another idea to keep in mind is that the feature mirrors regulatory compliance seen in real-world markets. In the physical marketplace, businesses must adhere to strict advertising laws and ethical standards. Advertisements nowadays must have some truth to them or else those advertisements will be taken down, or even worse, the company may get sued. The warrant feature will introduce a self-regulatory mechanism within the virtual market experiment, promoting the real-life legal and ethical compliance rules in advertising practices.

However, implementing the warrant feature in a user-friendly manner involves several key trade-offs. The primary challenge lies in balancing simplicity without being susceptible to abuse. While it's essential to simplify the process of adding and challenging warrants, this simplification should also maintain the feature's credibility and effectiveness. The design must be convenient enough for users to engage easily with the procedure yet robust enough to prevent misuse and ensure seriousness in the application of warrants. Reports of warrants should not be thrown out without careful consideration because in the real world, a lot of money can be on the line. 

The feature must still be accessible to all users, irrespective of their technical or legal expertise. However, this accessibility must not dilute the thoroughness required for a rigorous verification process. Ensuring that the procedures for adding and challenging warrants are straightforward yet comprehensive enough to authenticate claims and resolve disputes is of utmost importance.

Furthermore, balancing user engagement with overregulation is essential. The feature should be designed to encourage user interaction and engagement. However, too many regulations or overly complex procedures could prevent users from utilizing it. Finding a middle ground where the feature is regulated enough to maintain its integrity without becoming a burden for users is a necessary challenge to solve. 


