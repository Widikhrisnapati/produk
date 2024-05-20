import Swal from 'sweetalert2';
export const SwalLoading = Swal.mixin({
    title : "Loading",
    icon : "info",
    didOpen : () => {
        Swal.showLoading()
    },
    allowEscapeKey : false,
    allowOutsideClick : false,
    allowEnterKey : false
})