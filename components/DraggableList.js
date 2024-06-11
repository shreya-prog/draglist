"use client";
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const items = [
    {
        id: '1',
        title: 'Scotland Island',
        location: 'Sydney, Australia',
        image: '/images/image1.jpg',
    },
    {
        id: '2',
        title: 'The Charles Grand Brasserie & Bar',
        location: 'Lorem ipsum, Dolor',
        image: '/images/image2.jpg',
    },
    {
        id: '3',
        title: 'Bridge Climb',
        location: 'Dolor, Sit amet',
        image: '/images/image3.jpg',
    },
    {
        id: '4',
        title: 'Scotland Island',
        location: 'Sydney, Australia',
        image: '/images/image4.jpg',
    },
    {
        id: '5',
        title: 'Clam Bar',
        location: 'Et cetera veni, Vidi vici',
        image: '/images/image5.jpg',
    },
    {
        id: '6',
        title: 'Vivid Festival',
        location: 'Sydney, Australia',
        image: '/images/image6.jpg',
    },
];

const DraggableList = () => {
    const [list, setList] = React.useState(items);

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const updatedList = Array.from(list);
        const [reorderedItem] = updatedList.splice(result.source.index, 1);
        updatedList.splice(result.destination.index, 0, reorderedItem);

        setList(updatedList);
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="items">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="p-4 bg-white rounded shadow-md">
                        {list.map(({ id, title, location, image }, index) => (
                            <Draggable key={id} draggableId={id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`flex items-center p-4 mb-4 rounded ${
                                            snapshot.isDragging ? 'bg-blue-100' : 'bg-gray-100'
                                        } shadow`}
                                    >
                                        <img src={image} alt={title} className="w-16 h-16 mr-4 rounded" />
                                        <div>
                                            <h3 className="font-bold">{title}</h3>
                                            <p className="text-gray-600">{location}</p>
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DraggableList;
