
<h1 data-cy='heading-sitio' class="nombre-pagina">Olvide Password</h1>
<p data-cy='descripcion-pagina' class="descripcion-pagina">Reestablece tu password escribiendo tu email a continuación</p>

<?php 
    include_once __DIR__ . "/../templates/alertas.php";
?>

<form class="formulario" action="/olvide" method="POST">
    <div class="campo">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Tu Email"/>
    </div>

    <input data-cy='boton-enviar-instrucciones' type="submit" class="boton" value="Enviar Instrucciones">
</form>

<div class="acciones">
    <a data-cy='href-ya-tiene-cuenta' href="/">¿Ya Tienes Una Cuenta? Inicia Sesión</a>
    <a data-cy='href-crear-cuenta' href="/crear-cuenta">¿No Tienes Una Cuenta? Crear Una</a>
</div>