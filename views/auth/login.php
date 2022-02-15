<h1 data-cy='heading-sitio' class="nombre-pagina">Login</h1>
<p data-cy='descripcion-pagina' class="descripcion-pagina">Inicia Sesión Con Tus Datos</p>


<?php 
    include_once __DIR__ . "/../templates/alertas.php";
?>

<form class="formulario" method="POST" action="/">
    <div class="campo">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Tu email" name="email" value="<?php echo s($auth->email);?>">
    </div>

    <div class="campo">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Tu Password" name="password">
    </div>
    <input data-cy='boton-iniciar-sesion' type="submit" class="boton" value="Iniciar Sesion">
    

</form>

<div class="acciones">
    <a data-cy='href-crear-cuenta' href="/crear-cuenta">¿No Tienes Una Cuenta? Crear Una</a>
    <a data-cy='href-olvide-password' href="/olvide">¿Olvidaste Tu Password?</a>
</div>

