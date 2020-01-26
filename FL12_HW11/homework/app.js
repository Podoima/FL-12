const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function makeCatalog(parentNode, items) {
    const FOLDER_NODE = 'ul';
    const FILE_NODE = 'li';
    const LIST = document.createElement(FOLDER_NODE);
    parentNode.appendChild(LIST);
    
    (function drawCatalog(ulNode, arr) {
        const EMPTY_FOLDER_CHILD_TEXT = 'Folder is empty';
        const EMPTY_FOLDER_CHILD_CLASS = 'empty_folder_description';
        const FOLDER_CLASS = 'folder';
        const FILE_CLASS = 'file';
        const FOLDER_NAME_OPEN_TAG = '<span class="folder_title">';
        const FOLDER_NAME_CLOSE_TAG = '</span>';
        const FILE_NAME_OPEN_TAG = '<span>';
        const FILE_NAME_CLOSE_TAG = '</span>';
        const CLOSED_FOLDER_ICON = '<i class="material-icons">folder</i>';
        const FILE_ICON = '<i class="material-icons">insert_drive_file</i>';
        
        
        for (let item of arr) {
            if (item.folder) {
                const FOLDER = document.createElement(FOLDER_NODE);
                FOLDER.innerHTML = `${FOLDER_NAME_OPEN_TAG}${CLOSED_FOLDER_ICON} ${item.title}${FOLDER_NAME_CLOSE_TAG}`;
                FOLDER.className = FOLDER_CLASS;
                ulNode.appendChild(FOLDER);
                if (item.children) {
                    drawCatalog(FOLDER, item.children);
                } else {
                    const EMPTY_FOLDER_CHILD = document.createElement(FILE_NODE);
                    EMPTY_FOLDER_CHILD.innerHTML = EMPTY_FOLDER_CHILD_TEXT;
                    EMPTY_FOLDER_CHILD.className = EMPTY_FOLDER_CHILD_CLASS;
                    FOLDER.appendChild(EMPTY_FOLDER_CHILD);
                }
            } else if (item.title) {
                const FILE = document.createElement(FILE_NODE);
                FILE.innerHTML = `${FILE_NAME_OPEN_TAG}${FILE_ICON} ${item.title}${FILE_NAME_CLOSE_TAG}`;
                FILE.className = FILE_CLASS;
                ulNode.appendChild(FILE);
            }
        }
    })(LIST, items);
}

makeCatalog(rootNode, structure);

(function toggleFolderStatus() {
    const FOLDERS_TITLES = document.querySelectorAll('.folder_title');    
    for (let item of FOLDERS_TITLES) {
        item.addEventListener('click', () => {
            const FOLDER = item.parentElement;
            const FOLDER_ICON = item.firstChild;
            FOLDER.classList.toggle('opened_folder');
            if (FOLDER.className === 'folder') {
                FOLDER_ICON.innerHTML = 'folder';
            } else {
                FOLDER_ICON.innerHTML = 'folder_open';
            }
        });
    }
})();
