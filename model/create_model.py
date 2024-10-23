import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from sklearn.utils import shuffle
from sklearn.preprocessing import OneHotEncoder
import numpy as np
from data import features, labels

if __name__ == '__main__':

    print("Enconding labels...")
    expanded_labels = np.expand_dims(labels.to_numpy(), axis=1)
    encoder = OneHotEncoder(sparse_output=False)
    encoded_labels = encoder.fit_transform(expanded_labels)

    print("Shuffling data...")
    X, y = shuffle(features, encoded_labels)
    print("Creating model...")

    model = tf.keras.Sequential([
            layers.Dense(6, activation="relu"),
            layers.Dense(10, activation="relu"),
            layers.Dropout(0.2),
            layers.Dense(5, activation="softmax")
        ])
    model.compile(
            optimizer = keras.optimizers.Adam(learning_rate=0.01),
            loss=keras.losses.CategoricalCrossentropy(),
            metrics = [keras.metrics.CategoricalCrossentropy()]
        )
    model.fit(X, y, epochs=50)
   
    print("Saving model...")
    model.save("john.keras")
