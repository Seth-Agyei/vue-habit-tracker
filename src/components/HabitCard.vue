<script setup>
defineProps(
    {
    habit: Object
    }
);

const emit = defineEmits("toggle");

</script>

<template>

    <div class="habit-card">

        <h3>{{ habit.name }}</h3>

        <p>{{ habit.category }}</p>

        <span :class="habit.priority">
            {{ habit.priority }}
        </span>

        <button @click="emit('toggle', habit.id)">
            {{ habit.completed ? 'Completed' : 'Pending' }}
        </button>
    </div>

</template>