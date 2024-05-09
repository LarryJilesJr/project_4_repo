# project_4_repo

### Project Overview and Purpose
Our project seeks to analyze personal key indicators of heart disease using a dataset sourced from Kaggle. Through data cleaning, visualization, and machine learning, we aim to identify factors influencing heart disease risk and develop predictive models for early detection

### Ethical Considerations

- **Transparency of Methodology:**
  - Clearly describe data collection and analysis methods in the project.
  - Document data sources and analytical processes for shared results.

### Data Sources

https://www.kaggle.com/datasets/kamilpytlak/personal-key-indicators-of-heart-disease (specifically the 2022 dataset)

### Process

### First Notebook (PySpark and SQL Queries)

We will start explaining our first notebook "Project_4". This first notebook explores heart disease data, starting with loading and preprocessing steps. It addresses various risk factors like smoking, diabetes, and teeth removal through SQL queries and visualizations. The analysis provides insights into how these factors may affect heart disease risk. More detailed explanations follow below.

So to start we installed essential libraries for our project. We added findspark to initialize Spark, pyspark for big data processing, pyarrow for data interchange, fastparquet for handling Parquet files, and plotly for interactive visualizations. These installations prepare our environment for the data processing and analysis tasks ahead.

![importn1](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/import%20n1.png?raw=true)

We continue by importing essential libraries for data manipulation and model building. We load train_test_split from scikit-learn for partitioning data, StandardScaler for feature scaling, pandas for data handling, and tensorflow for constructing and training machine learning models. These tools equip us to handle data effectively and build predictive models.

![import dependencies n1](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/import%20dependencies%20n1.png?raw=true)

In this setup, we prepared our environment for using Apache Spark. We installed Java and Apache Spark, ensuring compatibility by setting up the necessary environment variables. Then, we used findspark, a helpful library to easily initialize Spark within our Python notebook. This enables us to perform large-scale data processing efficiently.

![install java and spark](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/install%20java%20and%20spark.png?raw=true)

We imported necessary libraries and initiated a Spark session named "SparkSQL." This session acts as the gateway to all Spark functionalities, enabling us to efficiently manage and process large datasets using Spark's structured data processing capabilities.

![import packages](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/import%20packages.png?raw=true)

In this step, we read data from an AWS S3 bucket into a DataFrame using PySpark. We accessed the CSV file containing heart disease data located on S3, specified the URL, and then used Spark's ability to handle distributed data sources to load this data directly into our environment. After loading, we displayed the initial rows of the DataFrame to verify the successful import and to preview the data structure. This approach allows us to efficiently manage large datasets stored remotely.

![reading in the aws s3 bucket](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/reading%20in%20the%20aws%20s3%20bucket.png?raw=true)

In this step, we created a temporary view of the heart disease DataFrame to facilitate easier querying and manipulation within Spark SQL. We also utilized methods to describe and display the schema of the DataFrame. This provides a detailed summary of the data's structure and statistical overview, helping to understand the dataset's characteristics before proceeding with further analysis. This approach is particularly useful for exploratory data analysis and ensuring data quality.

![creating temprary view of df](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/creating%20temprary%20view%20of%20df.png?raw=true)

We transformed "Yes" and "No" responses in our heart disease DataFrame to numerical values (1 and 0) across several health-related columns, making the data suitable for machine learning analysis. After updating, we previewed the changes to ensure accuracy, streamlining the dataset for further modeling.

![replace yes and no](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/replace%20yes%20and%20no.png?raw=true)

We checked the heart disease DataFrame for any missing values across all columns. This step helps identify any gaps in data that may require cleaning or imputation before analysis, ensuring the integrity and usability of our dataset for further statistical or machine learning tasks. If missing values are found, we list the affected columns; otherwise, we confirm that the data is complete.

![clean 1](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/clean%201.png?raw=true)

We removed any duplicate rows from the heart disease DataFrame to ensure data quality and accuracy. After cleaning, we checked the DataFrame's dimensions to verify the data's structure and to understand the impact of the cleaning process. This step is crucial for maintaining a reliable dataset for accurate analyses and model training.

![duplicates](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/duplicates.png?raw=true)


- **Queries and Visualizations:**

For our first query, we analyzed the distribution of heart attacks by gender in our dataset. First, we grouped the data by gender to count occurrences and total heart attacks for each group. Then, we determined which gender had more heart attacks, revealing males are more at risk. This analysis was visualized using a line plot that highlights the total number of heart attacks for males and females, clearly showing the differences and emphasizing the risk assessment visually.

![Q1](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/Q1.png?raw=true)
![V1](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/V2.png?raw=true)

This is our plot:

![male/female](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/males:females.png?raw=true)

For our second query, we examined how age influences the risk of heart disease by creating a temporary view of our DataFrame and executing a SQL query to calculate the average heart attack occurrence by age category. The results, visualized in a scatter plot, highlight the increasing risk of heart disease with age, with older age groups showing significantly higher risks. This analysis helps in understanding age-related patterns in heart disease incidence within the dataset.

![Q2](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/Q2.png?raw=true)
![V2](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/V2.png?raw=true)

This is our plot:
![age](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/age:bar.png?raw=true)


For our third query, we analyzed how race and ethnicity correlate with heart disease prevalence. A SQL query was executed to calculate average heart disease risk for each racial and ethnic group. The results were visualized in a bar plot, displaying the prevalence rate across different groups to highlight disparities in heart disease risk based on race and ethnicity.

![Q4](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/Q4.png?raw=true)
![V4](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/V4.png?raw=true)

This is our plot: 

![ethnicity](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/ethnic.png?raw=true)

For our fourth query, we investigated the impact of BMI on heart disease risk by calculating average BMI and heart disease prevalence from our dataset. A SQL query grouped by heart attack occurrence provided insights into how BMI correlates with heart disease, with the results showcasing variations in average BMI among those with and without heart disease.
![Q5](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/Q5.png?raw=true)
![V5](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/V5.png?raw=true)

This is our plot: 

![BMI](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/bmiaverage.png?raw=true)

For our fifth query, we explored the impact of smoking on heart disease risk by executing a SQL query to assess the prevalence of heart disease across different smoking statuses. This analysis highlights how smoking behavior correlates with heart disease, emphasizing the importance of smoking cessation in reducing heart disease risk.

![Q6](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/Q6.png?raw=true)
![V6](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/V6.png?raw=true)

This is our plot:

![Plot6](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/Plot6.png?raw=true)

For our sixth query, we investigate the correlation between diabetes and heart disease by calculating the average prevalence of heart disease among individuals with and without diabetes. The results are displayed in a table format, followed by a stacked bar chart which visually represents the heart disease prevalence based on diabetes status.

![Q7](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/Q7.png?raw=true)
![V7](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/V7.png?raw=true)

This is our plot: 

![Plot7](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/Plot7.png?raw=true)

In this last query, the SQL analysis examines the correlation between the number of teeth removed and the prevalence of heart disease. The data is aggregated and visualized to show whether individuals with more teeth removed have a higher likelihood of heart disease, represented by increasing heart disease prevalence as more teeth are removed. The visualization likely uses an area plot to illustrate the cumulative trend of heart disease prevalence across different categories of teeth removal.

![Q8](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/Q8.png?raw=true)
![V8](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/V8.png?raw=true)

This is our plot:

![PLOT8](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/Plot8.png?raw=true)


### Second Notebook (Heatmap)

Now we are explaining the process of our second notebook which is all about creating our heatmap.

So we start this by creating the Python script for the data preparation, this efficiently loads heart disease data, processes state-specific counts, and prepares the data in JSON format for web integration.

![python script](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/python%20script.png?raw=true)

After that we work on the HTML. HTML structures the webpage, incorporating CSS and Leaflet.js for dynamic map styling and functionalities.

![HTML]([link](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/HTML.png?raw=true))

And last but not least for the heatmap we work on the interactive map with JavaScript. JavaScript leverages Leaflet.js to visualize heart disease data on an interactive map, enhancing user engagement with dynamic markers and overlays

![java](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/java.png?raw=true)

This is how the map looks.

![map look ](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/map%20look.png?raw=true)


### Machine Learning Model 1 (Predictive Analytics in Healthcare: Unveilig Insights into Heart Disease Risk, Deep Learning Model)

Now we are continuing to explain our notebook "project_4_model". This notebook focuses on building and training a deep learning model using TensorFlow to predict the risk of heart disease based on the preprocessed data.

We started this notebook by preparing our data analysis and machine learning tasks by importing essential libraries such as Pandas for data manipulation, scikit-learn for model selection and preprocessing, and TensorFlow for building and training machine learning models. We also load a dataset from a CSV file into a Pandas DataFrame to begin our data exploration.

![ Import notebook2](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/Import%20notebook2.png?raw=true)

In this code, we streamline our dataset by removing columns that are not beneficial for our analysis. This involves deleting specific columns related to physical and mental health days, last checkup times, smoker status, and e-cigarette usage from the DataFrame, ensuring that our dataset is more focused on relevant features for modeling heart disease.

![dropping non-beneficial](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/dropping%20non-beneficial.png?raw=true)

In this code, we're dropping several additional columns from the DataFrame heart_disease_df. These columns include 'HadDepressiveDisorder', 'DeafOrHardOfHearing', 'BlindOrVisionDifficulty', 'DifficultyConcentrating', 'DifficultyWalking', 'DifficultyDressingBathing', and 'DifficultyErrands'. After dropping these columns, we're displaying the first three rows of the updated DataFrame using head().

![dropping additional](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/dropping%20additional.png?raw=true)

We converted categorical responses 'Yes' and 'No' to numerical values across multiple health-related columns in our dataset, facilitating easier analysis and model training. This includes health conditions like heart attack, stroke, diabetes, and other factors like alcohol consumption and flu vaccination status. After the replacement, the first few rows of the modified DataFrame are displayed to verify the changes.

![Replace 2](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/Replace%202.png?raw=true)


In this code, we assess the diversity of data by calculating the number of unique values present in each column of the DataFrame, which helps identify the range of data variation and the presence of categorical data.

![determining values](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/determining%20values.png?raw=true)

Here, we're examining the distribution of BMI values in a dataset called heart_disease_df. We're using the value_counts() method to count the occurrences of each unique BMI value.

![looking at BMI](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/looking%20at%20BMI.png?raw=true)

In this code, we're filtering the previously obtained BMI value counts to identify only those BMI values that have a count greater than 100.

![looking greater](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/looking%20greater.png?raw=true)

In this segment, we're identifying BMI values that occur less than or equal to 100 times and storing their indices in a list called names_to_replace. Then, we're replacing these values with 'Other' in the DataFrame heart_disease_df. Finally, we're verifying the success of the binning process by checking the updated value counts of the 'BMI' column.

![determining values that can be replaced](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/determining%20values%20that%20can%20be%20replaced.png?raw=true)

Here, we're examining the distribution of 'State' values in the dataset heart_disease_df using the value_counts() method.

![looking at state](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/looking%20at%20state.png?raw=true)

In this code, we're setting a cutoff value of 5000 occurrences and creating a list called states_to_replace containing the state values that occur less than this cutoff. Then, we're replacing these state values with 'Other' in the DataFrame heart_disease_df. Finally, we're verifying the success of the binning process by checking the updated value counts of the 'State' column.

![choose a cutoff](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/choose%20a%20cutoff.png?raw=true)

In this section, we're examining the distribution of 'WeightInKilograms' values in the dataset heart_disease_df using the value_counts() method.

![weightinkilograms](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/weightinkilograms.png?raw=true)

In this code, we're setting a cutoff value of 5000 occurrences and creating a list called classifications_to_replace containing the 'WeightInKilograms' values that occur less than this cutoff. Then, we're replacing these values with 'Other' in the DataFrame heart_disease_df. Finally, we're verifying the success of the binning process by checking the updated value counts of the 'WeightInKilograms' column.

![choose cutoff 2](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/choose%20cutoff%202.png?raw=true)

We're creating an array named categorical_variables that stores the names of categorical variables in the DataFrame heart_disease_df. These variables are identified based on their data type being 'object'.

![array](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/array.png?raw=true)

In this code, we're converting categorical data into numeric format using the pd.get_dummies() function, which creates dummy variables for each category of the categorical features. The resulting DataFrame, new_heart_disease_df, contains these dummy variables. We're displaying the first few rows of this updated DataFrame to examine the changes.

![convert categorical](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/convert%20categorical.png?raw=true)

In this part, we're splitting our preprocessed data into two arrays: y contains the target variable 'HadHeartAttack', while X contains all the features except 'HadHeartAttack'.

Then, we further split the preprocessed data into training and testing datasets using train_test_split(). The feature arrays X_train and X_test along with the target arrays y_train and y_test are created, ensuring that the class distribution is stratified based on the target variable 'HadHeartAttack'.

![split2](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/split2.png?raw=true)


- **Compile, Train and Evaluate the Model:**

This code creates a neural network with layers for processing data. There are layers for receiving input, some layers for processing, and one layer for producing output. Each layer has different functions for handling information.

![define the model](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/define%20the%20model.png?raw=true)

This was the result:

![results](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/results.png?raw=true)

Here, we're compiling the neural network model. We specify the loss function as "binary_crossentropy", the optimizer as "adam", and we're interested in tracking the accuracy metric during training.

![compiling the model](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/compiling%20the%20model.png?raw=true)

Here, we're training the compiled neural network model nn_model using the training data X_train_scaled and y_train. We're running the training process for 50 epochs.

![training the model](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/training%20the%20model.png?raw=true)

This code evaluates the trained neural network model using the test data (X_test_scaled and y_test). It calculates the model's loss and accuracy on the test dataset and prints out these values.

![evaluate the model](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/evaluate%20the%20model.png?raw=true)

This is the results: 

![results 2](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/results%202.png?raw=true)

This code exports the trained neural network model to an HDF5 file named 'Heart_disease_model.h5'. It saves the model to the specified filename and prints a confirmation message indicating where the model was saved.

![exporting](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/N2/exporting.png?raw=true)


### Machine Learning Model 2 (Heart Images Machine Learning)

For our second machine learning model we started by installing libraries and importing the mdoules. Install the OpenCV library and import essential modules for handling file operations, image processing, and data manipulation.

![ml2 libraries](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/ml2%20libraries.png?raw=true)

After that we started by organizing the image data. We set up directory paths and define a function to categorize images as 'Healthy' or 'Unhealthy' based on their storage location, using OpenCV for image reading.

![organize image](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/organize%20image.png?raw=true)

Following that, our next step is compiling datagrames and exporting to excel. We merge categorized image data into test and training DataFrames and save these as Excel files to ensure data is stored and accessible for further analysis.

![compiling](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/compiling.png?raw=true)

The next step for this model is loading and configuring the VGG19 Model. We load and configure the VGG19 model pre-trained on ImageNet, setting up image data augmentation for enhancing model training, and prepare training and testing data generators.

![VGG19](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/VGG19.png?raw=true)

Following this step we started building and training the deep learning model. We customize the VGG19 model by adding new layers tailored for the specific classes in our dataset, compile the model, and train it using the prepared image data batches.

![training](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/training.png?raw=true)

Lastly, we evaluate the model performance. We valuate the trained model's performance on the test data to assess accuracy and loss.

![evaluate](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/evaluate.png?raw=true)

And this was our results: 

![result m2](https://github.com/emely-zelaya/Photos_group-Project4/blob/main/result%20m2.png?raw=true)

## Pros and Cons per Model

### Machine Learning Model 1 (Predictive Analytics in Healthcare: Unveilig Insights into Heart Disease Risk, Deep Learning Model)

Pros:

*Data Integration: Utilizes a broad range of patient data, offering a comprehensive view of individual health profiles.*
*Versatility: Capable of analyzing various risk factors simultaneously, making it adaptable to different healthcare settings.*


Cons:

*Complexity: Requires significant preprocessing of data, which can be time-consuming and resource-intensive.*
*Dependency on Data Quality: Highly dependent on the availability and accuracy of input data, which can affect its reliability.*

### Machine Learning Model 2 (Heart Images Machine Learning)

Pros:

*High Accuracy: Employs VGG19, known for its effectiveness in image classification, leading to high accuracy in detecting heart disease from images.*
*Enhanced Learning from Visual Data: Benefits from deep learning capabilities, particularly in handling complex image data for diagnostics.*


Cons:

*Computational Intensity: Requires significant computational resources to train and run, which might not be feasible in all healthcare settings.*
*Dependency on Data Quality: Have variables results depending on the quality and quantity of the data. / More images, higher accuracy.*

### Conclusions

-Superior Model Performance: The second model, using advanced VGG19, outperforms the first in accuracy due to its sophisticated image processing capabilities.

-Importance of Data Quality: Effective data preprocessing is crucial as both models' performance heavily relies on the quality and preparation of the input data.

-Healthcare Impact: These machine learning models demonstrate significant potential for improving early diagnosis and treatment of heart disease, highlighting the transformative impact of AI in healthcare.


##Our powerpoint is the following. [Our Presentation](https://docs.google.com/presentation/d/15HNU5THFQh5I-im8LF2gnfeBbU3lbYejorq5JHJM_kk/edit#slide=id.p)
 


