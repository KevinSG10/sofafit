import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './planAlimentacion.css';



const PlanAlimentacion = () => {
  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [recipe, setRecipe] = useState('');

  const showRecipe = () => {
    // Verificar si todos los campos están llenos
    if (!weight || !sex || !height || !age || !fitnessGoal) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    let recipeContent = '';

    if (sex === 'hombre') {
      if (fitnessGoal === 'ganancia muscular') {
        recipeContent = `
          <h3>Ganancia Muscular</h3>
          <p><strong>Desayuno:</strong> Omelette de Clara de Huevo con Espinacas y Tomate</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Calentar el aceite de oliva en una sartén a fuego medio.</li>
            <li>Añadir las espinacas y el tomate, cocinar hasta que las espinacas se marchiten.</li>
            <li>Batir las claras de huevo con una pizca de sal y pimienta, verter en la sartén.</li>
            <li>Cocinar hasta que las claras estén firmes y doblar el omelette por la mitad.</li>
            <li>Servir con una rebanada de pan integral y un vaso de leche desnatada.</li>
          </ol>
          <p><strong>Almuerzo:</strong> Pollo a la Parrilla con Quinoa y Verduras Asadas</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Precalentar la parrilla a fuego medio-alto.</li>
            <li>Sazonar la pechuga de pollo con sal y pimienta, asar hasta que esté completamente cocida.</li>
            <li>Mezclar las verduras con aceite de oliva, sal y pimienta, asar hasta que estén tiernas.</li>
            <li>Servir el pollo a la parrilla con la quinoa y las verduras asadas.</li>
          </ol>
          <p><strong>Cena:</strong> Salmón al Horno con Batata y Espárragos</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Precalentar el horno a 200°C.</li>
            <li>Colocar el salmón en una bandeja para hornear, rociar con aceite de oliva, jugo de limón, sal y pimienta.</li>
            <li>Añadir las rodajas de batata y los espárragos a la bandeja, sazonar con sal y pimienta.</li>
            <li>Hornear durante 20-25 minutos o hasta que el salmón esté cocido y las batatas estén tiernas.</li>
          </ol>
        `;
      } else if (fitnessGoal === 'pérdida de peso') {
        recipeContent = `
          <h3>Pérdida de Peso</h3>
          <p><strong>Desayuno:</strong> Batido de Proteínas con Frutas y Avena</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Colocar todos los ingredientes en una licuadora.</li>
            <li>Mezclar hasta obtener una consistencia suave.</li>
            <li>Servir inmediatamente.</li>
          </ol>
          <p><strong>Almuerzo:</strong> Ensalada de Pollo a la Parrilla con Vinagreta de Limón</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>En un tazón grande, combinar la mezcla de lechugas, pepino, tomate, zanahoria y cebolla roja.</li>
            <li>Añadir el pollo a la parrilla.</li>
            <li>En un pequeño tazón, mezclar el aceite de oliva, jugo de limón, sal y pimienta para hacer la vinagreta.</li>
            <li>Rociar la vinagreta sobre la ensalada y mezclar bien antes de servir.</li>
          </ol>
          <p><strong>Cena:</strong> Tacos de Pescado Saludables</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Precalentar el horno a 200°C.</li>
            <li>Sazonar el pescado con comino, pimentón, sal y pimienta.</li>
            <li>Calentar el aceite de oliva en una sartén a fuego medio-alto, cocinar el pescado hasta que esté dorado y cocido.</li>
            <li>Calentar las tortillas en el horno durante unos minutos.</li>
            <li>Montar los tacos colocando el pescado en las tortillas, añadiendo repollo rallado y salsa de yogur.</li>
            <li>Servir con rodajas de limón.</li>
          </ol>
        `;
      } else if (fitnessGoal === 'mantenimiento') {
        recipeContent = `
          <h3>Estar en forma</h3>
          <p><strong>Desayuno:</strong> Yogur Griego con Frutas y Granola</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Colocar el yogur griego en un tazón.</li>
            <li>Añadir las frutas frescas por encima del yogur.</li>
            <li>Espolvorear la granola sobre las frutas.</li>
            <li>Rociar con miel si se desea.</li>
            <li>Servir inmediatamente.</li>
          </ol>
          <p><strong>Almuerzo:</strong> Ensalada de Atún con Verduras Frescas</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>En un tazón grande, mezclar la mezcla de lechugas, tomate, pepino, zanahoria y maíz.</li>
            <li>Añadir el atún escurrido a la ensalada.</li>
            <li>En un pequeño tazón, mezclar el aceite de oliva y el vinagre balsámico, sazonar con sal y pimienta.</li>
            <li>Rociar el aderezo sobre la ensalada y mezclar bien.</li>
            <li>Servir inmediatamente.</li>
          </ol>
          <p><strong>Cena:</strong> Pollo al Horno con Arroz Integral y Brócoli</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Precalentar el horno a 200°C.</li>
            <li>Colocar la pechuga de pollo en una bandeja para hornear, sazonar con sal, pimienta y jugo de limón.</li>
            <li>Hornear el pollo durante 20-25 minutos o hasta que esté completamente cocido.</li>
            <li>Mientras tanto, calentar el aceite de oliva en una sartén a fuego medio, añadir el ajo y cocinar hasta que esté dorado.</li>
            <li>Añadir el brócoli a la sartén y saltear hasta que esté tierno.</li>
            <li>Servir el pollo al horno con el arroz integral y el brócoli salteado.</li>
          </ol>
        `;
      }
    } else if (sex === 'mujer') {
      if (fitnessGoal === 'ganancia muscular') {
        recipeContent = `
          <h3>Ganancia Muscular</h3>
          <p><strong>Desayuno:</strong> Tostadas Integrales con Aguacate y Huevo Pochado</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Tostar las rebanadas de pan integral hasta que estén doradas.</li>
            <li>Aplastar el aguacate y untarlo sobre las tostadas, sazonar con sal y pimienta.</li>
            <li>Llevar a ebullición una olla con agua y añadir el vinagre blanco.</li>
            <li>Romper los huevos en pequeños recipientes y deslizar cada uno en el agua hirviendo, cocinar durante 3-4 minutos hasta que las claras estén firmes y las yemas todavía líquidas.</li>
            <li>Colocar los huevos pochados sobre las tostadas con aguacate y espolvorear con semillas de sésamo si se desea.</li>
          </ol>
          <p><strong>Almuerzo:</strong> Pechuga de Pollo a la Parrilla con Batata Asada y Espinacas Salteadas</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Precalentar el horno a 200°C.</li>
            <li>Colocar los cubos de batata en una bandeja para hornear, rociar con aceite de oliva, sal y pimienta, y asar durante 20-25 minutos o hasta que estén tiernos.</li>
            <li>Sazonar la pechuga de pollo con sal, pimienta y jugo de limón, asar en una parrilla hasta que esté completamente cocida.</li>
            <li>En una sartén grande, saltear las espinacas en un poco de aceite de oliva hasta que estén marchitas.</li>
            <li>Servir el pollo a la parrilla con las batatas asadas y las espinacas salteadas.</li>
          </ol>
          <p><strong>Cena:</strong> Salmón al Horno con Quinua y Espárragos</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Precalentar el horno a 200°C.</li>
            <li>Colocar el salmón en una bandeja para hornear, rociar con aceite de oliva, jugo de limón, sal y pimienta.</li>
            <li>Añadir los espárragos a la bandeja, sazonar con sal y pimienta.</li>
            <li>Hornear durante 20-25 minutos o hasta que el salmón esté cocido y los espárragos estén tiernos.</li>
            <li>Servir el salmón al horno con la quinua cocida y los espárragos.</li>
          </ol>
        `;
      } else if (fitnessGoal === 'pérdida de peso') {
        recipeContent = `
          <h3>Pérdida de Peso</h3>
          <p><strong>Desayuno:</strong> Smoothie Verde de Espinacas y Manzana</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Colocar todos los ingredientes en una licuadora.</li>
            <li>Mezclar hasta obtener una consistencia suave.</li>
            <li>Servir inmediatamente.</li>
          </ol>
          <p><strong>Almuerzo:</strong> Ensalada de Garbanzos y Vegetales</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>En un tazón grande, combinar la mezcla de lechugas, pepino, tomate, cebolla y garbanzos.</li>
            <li>En un pequeño tazón, mezclar el aceite de oliva, jugo de limón, sal y pimienta para hacer la vinagreta.</li>
            <li>Rociar la vinagreta sobre la ensalada y mezclar bien.</li>
            <li>Servir inmediatamente.</li>
          </ol>
          <p><strong>Cena:</strong> Pavo a la Plancha con Verduras al Vapor</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Sazonar el filete de pavo con sal, pimienta y jugo de limón.</li>
            <li>Calentar el aceite de oliva en una sartén a fuego medio y cocinar el pavo hasta que esté dorado y cocido por completo.</li>
            <li>Al mismo tiempo, cocinar las verduras al vapor hasta que estén tiernas.</li>
            <li>Servir el pavo a la plancha con las verduras al vapor.</li>
          </ol>
        `;
      } else if (fitnessGoal === 'mantenimiento') {
        recipeContent = `
          <h3>Estar en forma</h3>
          <p><strong>Desayuno:</strong> Avena con Frutas y Nueces</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>En una cacerola, calentar la leche de almendras a fuego medio.</li>
            <li>Añadir la avena y cocinar, removiendo ocasionalmente, hasta que la avena esté suave y cremosa.</li>
            <li>Servir la avena en un tazón y añadir las frutas y las nueces por encima.</li>
            <li>Rociar con miel si se desea.</li>
          </ol>
          <p><strong>Almuerzo:</strong> Wrap de Pavo y Vegetales</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Calentar la tortilla integral en una sartén durante unos segundos.</li>
            <li>Untar el hummus sobre la tortilla.</li>
            <li>Colocar las rodajas de pavo, aguacate, pepino, pimiento y espinacas en el centro de la tortilla.</li>
            <li>Sazonar con sal y pimienta al gusto.</li>
            <li>Enrollar la tortilla firmemente y cortar por la mitad antes de servir.</li>
          </ol>
          <p><strong>Cena:</strong> Pechuga de Pollo al Horno con Calabacín y Tomates Cherry</p>
          <p><strong>Instrucciones:</strong></p>
          <ol>
            <li>Precalentar el horno a 200°C.</li>
            <li>Colocar la pechuga de pollo en una bandeja para hornear y sazonar con sal, pimienta y hierbas italianas.</li>
            <li>En un tazón, mezclar el calabacín, los tomates cherry, el aceite de oliva y el ajo picado. Sazonar con sal y pimienta.</li>
            <li>Colocar las verduras alrededor del pollo en la bandeja para hornear.</li>
            <li>Hornear durante 20-25 minutos o hasta que el pollo esté completamente cocido y las verduras estén tiernas.</li>
            <li>Servir el pollo al horno con el calabacín y los tomates cherry.</li>
          </ol>
        `;
      }
    }

    if (!recipeContent) {
      recipeContent = '<p>No hay receta disponible para los filtros seleccionados</p>';
    }

    setRecipe(recipeContent);
  };

  const clearForm = () => {
    setWeight('');
    setSex('');
    setHeight('');
    setAge('');
    setFitnessGoal('');
    setRecipe('');
  };

  return (
    <div>
      <div className="plan-navbar">
        <div className="plan-logo">
          <img src="/assets/images/logo-home.png" alt="Logo" className="plan-logo-img" />
          SOFAFIT
        </div>
        <div className="plan-menu">
          <div className="plan-dropdown"></div>
          <Link to="/tips">TIPS &amp; CONSEJOS</Link>
          <a href="/testimonios">TESTIMONIOS</a>
          <a href="/contact">CONTACTO</a>
          <Link to="/dashboard">INICIO</Link>
          
        </div>
      </div>

      <h1 className="plan-title">Elige tu Plan de Alimentación</h1>

      <div className="plan-content">
        <form id="filterForm">
          <label htmlFor="weight">Peso (kg):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <br />
          <br />

          <label htmlFor="sex">Sexo:</label>
          <select
            id="sex"
            name="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
          <br />
          <br />

          <label htmlFor="height">Altura (m):</label>
          <input
            type="number"
            id="height"
            name="height"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
          <br />
          <br />

          <label htmlFor="age">Edad:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <br />
          <br />

          <label htmlFor="fitnessGoal">Objetivos de fitness:</label>
          <select
            id="fitnessGoal"
            name="fitnessGoal"
            value={fitnessGoal}
            onChange={(e) => setFitnessGoal(e.target.value)}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="ganancia muscular">Ganancia muscular</option>
            <option value="pérdida de peso">Pérdida de peso</option>
            <option value="mantenimiento">Estar en forma</option>
          </select>
          <br />
          <br />

          <div className="plan-buttons">
            <button type="button" onClick={showRecipe}>
              Mostrar Receta
            </button>
            <button type="button" onClick={clearForm}>
              Nueva Receta
            </button>
          </div>
        </form>

        {recipe && (
          <div
            id="recipe"
            className="plan-recipe"
            dangerouslySetInnerHTML={{ __html: recipe }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default PlanAlimentacion;
