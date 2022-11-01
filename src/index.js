import _ from 'lodash';
import './style.css';

const toToDoArray = [
    {
        index: 0,
        description: 'cook',
        completed: true,
    },
    {
        index: 1,
        description: 'study',
        completed: true,
    },
    {
        index: 2,
        description: 'wash clothes',
        completed: true,
    },
    {
        index: 3,
        description: 'sleep',
        completed: true,
    },
    {
        index: 4,
        description: 'exercise',
        completed: true,
    },
]

const taskInput = document.querySelector('.task-input');

const contentMarkup = () => {

    const liMarkup = toToDoArray.map((task) =>
        `
    <li class="task-item">
        <div class="btn-check">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app"
                viewBox="0 0 16 16">
                <path
                    d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
            </svg>
        </div>
        <textarea name="" id="edit-text" spellcheck="false">${task.description}</textarea>
        <div class="task-dots">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
        </div>
    </li>
    `).join('')

    taskInput.insertAdjacentHTML('afterend', liMarkup);
}

window.document.addEventListener('DOMContentLoaded', contentMarkup)
