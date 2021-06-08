<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                <slot name="title">

                </slot>
            </p>
            <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                <slot>

                </slot>
            </div>
        </div>
        <footer class="card-footer">
            <slot name="footer">

            </slot>

        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style >
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css";
.box {
    background: #2c3e50;
    padding: 10px;
    border: 1px solid cyan;
    margin-top: 10px;
    color: azure;
}
</style>

