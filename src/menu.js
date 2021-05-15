const homeDiv = document.getElementById("home");
const menuDiv = document.getElementById("menu");
const aboutUsDiv = document.getElementById("about-us");
const contactDiv = document.getElementById("contact");
menuDiv.addEventListener("click", () => menu());

let menu = () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.innerHTML = `
    <div id="content-container" class="content-container">
    <p class="category">Antipasti</p>
    <hr>
    <p class="dish">Avvoltini di melanzane alla Parmigiana – $18.75</p>
    <p class="description">Grilled eggplant rolled with mozzarella and parmesan cheese spiced with oregano and baked in a light tomato basil sauce</p>
    <p class="dish">Molluschi al tegamino – $23.75</p>
    <p class="description">Fresh poached Manila clams and fresh black mussels in a lightly spiced tomato sauce</p>
    <p class="dish">Bruschetta al pomodoro fresco e basilico – $14.75</p>
    <p class="description">Grilled garlic bread with diced fresh roma tomatoes, basil, and extra virgin olive oil; add fresh goat cheese – $5.50</p>
    <p class="dish">Bruschetta ai funghi trifolati – $16.75</p>
    <p class="description">Grilled garlic bread with a mix of sautéed local and imported mushrooms</p>
    <p class="dish">Carpaccio del Tiziano – $19.75</p>
    <p class="description">Thin slices of seared black pepper beef fillet topped with arugula and shaved parmesan cheese in a horseradish dressing</p>
    <p class="dish">Insalata di gamberi e capesante – $22.75</p>
    <p class="description">Warm salad of sautéed sea scallops and grilled shrimp with roasted bell peppers, green onions, organic arugula, capers, and garlic in a lemon mustard dressing</p>
    <p class="dish">Carciofi ai petali di parmigiano – $18.75</p>
    <p class="description">Salad of fresh artichoke hearts and diced roma tomatoes with shaved parmesan cheese in a balsamic vinaigrette dressing</p>
    <p class="dish">Insalata del Dante – $18.75</p>
    <p class="description">Salad of fresh baby spinach, diced organic tomatoes, roasted pine nuts, and red onions in a gorgonzola cheese dressing</p>
    <p class="dish">Mozzarella con trittico di vegetali – $20.75</p>
    <p class="description">Fresh mozzarella served with sliced organic roma tomatoes, fresh basil, roasted bell peppers, and grilled vegetables marinated in aromatic olive oil
      <br>(Caprese salad is available $15.25)</p>
    <p class="dish">Insalata di Parma – $19.75</p>
    <p class="description">A salad of fresh arugula, red apple, crushed walnut, diced roma tomato tossed with homemade balsamic dressing, petal of parmesan cheese served over imported parma prosciutto</p>
    <p class="dish">Insalata al cuore di Cesare – $15.75</p>
    <p class="description">Fresh hearts of romaine lettuce served with rosemary garlic croutons, and shaved parmesan cheese in a homemade caesar dressing</p>
    <p class="dish">Lattughette novelle di stagione – $14.75</p>
    <p class="description">Organic mixed baby lettuces, roma tomatoes, and shaved fennel with a balsamic vinaigrette dressing</p>
    <p class="dish">Insalata tricolore della Buona Tavola – $15.75</p>
    <p class="description">Salad of radicchio, arugula, mushrooms, and shaved parmesan cheese with rosemary garlic croutons in a homemade caesar dressing</p>
    <p class="category">Zuppe</p>
    <hr>
    <p class="dish">Minestrone saporito – $11.75</p>
    <p class="description">A medley of fresh vegetables and tuscan beans in a savory chicken broth with a touch of basil pesto</p>
    <p class="dish">Zuppa del giorno – $13.75</p>
    <p class="description">Soup of the day (piccola zuppa $8.75)</p>
    <p class="category">Primi Piatti</p>
    <hr>
    <p class="dish">Risotto del cusio – $26.75</p>
    <p class="description">Carnaroli rice with imported porcini mushrooms, fresh water shrimp, organic herbs and white wine cooked in a savory chicken broth</p>
    <p class="dish">Fettuccine al sugo di carni miste – $24.75</p>
    <p class="description">Fettuccine pasta with slowly braised chicken, duck, veal, and beef in an herbed meat sauce</p>
    <p class="dish">Pappardelle alla San Pietro – $27.75</p>
    <p class="description">Wide pasta ribbons with sautéed river shrimp, white wine, braised sweet onions and imported prosciutto finished with a light creamy tomato sauce</p>
    <p class="dish">Orecchiette con rapine e luganega – $20.75</p>
    <p class="description">Hat shaped pasta served with rapine broccoli, sun dried tomatoes, homemade Piemontese sytle pork sausage, garlic, and a splash of tomato sauce</p>
    <p class="dish">Tortiglioni Del Buon Gustaio – $20.75</p>
    <p class="description">Wide ridged pasta tubes with braised eggplant, roasted garlic, diced roma tomatoes and a splash of organic tomato sauce topped with ricotta cheese</p>
    <p class="dish">Penne all’arrabbiata – $18.95</p>
    <p class="description">Short tube pasta with garlic and Italian parsley in a spicy tomato sauce</p>
    <p class="dish">Capellini al filetto di pomodoro e basilico – $19.75</p>
    <p class="description">Angel hair pasta with organic tomato fillets, garlic, basil, and a hint of extra virgin olive oil</p>
    <p class="dish">Tortelloni bufalina – $22.75</p>
    <p class="description">Homemade tortelloni stuffed with fresh mozzarella and finished in a light tomato sauce</p>
    <p class="dish">Tortelloni alla Piemontese – $23.75</p>
    <p class="description">Homemade tortelloni stuffed with roasted veal, spinach, and prosciutto in a porcini mushroom tomato sauce</p>
    <p class="dish">Tortelloni di zucca alla salvia e mascarpone – $22.75</p>
    <p class="description">Homemade tortelloni stuffed with pumpkin and ricotta cheese in a sage and mascarpone cheese sauce topped with toasted walnuts</p>
    <p class="dish">Gnocchi Novaresi al pesto – $19.75</p>
    <p class="description">Homemade potato dumplings in a light creamy pesto sauce</p>
    <p class="dish">Agnolotti di scampi allo zafferano – $23.75</p>
    <p class="description">Homemade half moon shaped ravioli stuffed with scampi, imported prosciutto in a light saffron sauce</p>
    <p class="dish">Linguine ai muscoli di mare e porri – $29.95</p>
    <p class="description">Linguine pasta with farm-raised Manila clams, sea scallops, small black mussels, and shrimp in a white wine garlic and leek sauce</p>
    <p class="category">Secondi Piatti</p>
    <hr>
    <p class="dish">Costata di manzo ai sapori delle alpi – $55.25</p>
    <p class="description">14-16 oz grilled rib-eye steak marinated with wild herbs and garlic in a gorgonzola Barolo wine reduction sauce</p>
    <p class="dish">Teneroni Portobello – $36.75</p>
    <p class="description">Veal scaloppine with braised Portobello mushroom and roasted garlic in a veal reduction and marsala wine sauce</p>
    <p class="dish">Petti di pollo Asiago – $30.75</p>
    <p class="description">Free-range chicken breast and wing stuffed with Asiago cheese and imported Prosciutto di Parma pan-seared and finished in the oven with a white wine reduction</p>
    <p class="dish">Pollo scamiciato alla Vinaggia – $32.75</p>
    <p class="description">Grilled boneless free-range chicken marinated with garlic and herbs served with a rosemary mustard sauce</p>
    <p class="dish">Timballo Valdostano – $23.75</p>
    <p class="description">Grilled fresh eggplant, red and yellow bell peppers, green and yellow zucchini, and sweet onions baked with imported Valle d’ Aosta fontina cheese and a light tomato sauce</p>
  </div>
    `;

    homeDiv.classList.remove("clicked");
    menuDiv.classList.add("clicked");
    aboutUsDiv.classList.remove("clicked");
    contactDiv.classList.remove("clicked");

}

export default menu;