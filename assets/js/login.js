    // Funciones para abrir y cerrar el modal
    function openModal() {
        document.getElementById('loginModal').style.display = 'flex';
    }

    function loadModal() {
        document.getElementById('modalContainer').innerHTML = `
            <div id="loginModal" class="modal">
                <div class="modal-content">
                    <span class="close" onclick="closeModal()">&times;</span>
                    <form>
                        <label for="username">user:</label>
						<br>
                        <input type="text" id="username" name="username" required><br>

                        <label for="password">pass:</label>
						<br>
                        <input type="password" id="password" name="password" required><br>

                        <button type="button" onclick="submitLogin()">login</button>
                    </form>

                    <!-- Mensaje de error -->
                    <div id="errorMessage" class="error-message"></div>
                </div>
            </div>
        `;
        document.getElementById('loginModal').style.display = 'flex';
    }
    function closeModal() {
        document.getElementById('loginModal').style.display = 'none';
        // Limpiar mensaje de error al cerrar el modal
        document.getElementById('errorMessage').innerHTML = '';
    }

    // Función para procesar el inicio de sesión
    function submitLogin() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Lógica de autenticación (aquí puedes agregar tu propia lógica)
        if (username === 'usuario' && password === 'contraseña') {
            // Autenticación exitosa, cerrar el modal
            closeModal();
        } else {
            // Mostrar mensaje de error
            document.getElementById('errorMessage').innerHTML = 'Credenciales incorrectas. Inténtalo de nuevo.';
        }
    }
	
