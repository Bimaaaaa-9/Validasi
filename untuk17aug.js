document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const lomba = document.getElementById("lomba").value;
    const peserta = document.getElementById("peserta").value;
    const email = document.getElementById("email").value;
    const nomor = document.getElementById("nomor").value;

    // Validasi Lomba
    const lombaPattern = /^[A-Za-z\s]+$/;
    if (!lombaPattern.test(lomba)) {
        alert ('Nama hanya boleh berisi huruf dan spasi!');
        return;
    }

    // Validasi Peserta
    const pesertaPattern = /^[A-Za-z\s]+$/;
    if (!pesertaPattern.test(peserta)) {
        alert ('Nama hanya boleh berisi huruf dan spasi!');
        return;
    }

    // Validasi Email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        alert ('Format email tidak valid');
        return;
    }

    // Validasi Number
    const nomorPattern = /^\d+$/;
    if (!nomorPattern.test(nomor)) {
        alert ('Nomor hanya boleh berisi angka!');
        return;
    }

    alert('Submit Telah Berhasil');
});