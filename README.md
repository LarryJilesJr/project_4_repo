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
So we work in three different notebooks and we will be expalining the process of each one below.

We will start explaining our first notebook "Project_4". This first notebook explores heart disease data, starting with loading and preprocessing steps. It addresses various risk factors like smoking, diabetes, and teeth removal through SQL queries and visualizations. The analysis provides insights into how these factors may affect heart disease risk. More detailed explanations follow below.

So to start we installed essential libraries for our project. We added findspark to initialize Spark, pyspark for big data processing, pyarrow for data interchange, fastparquet for handling Parquet files, and plotly for interactive visualizations. These installations prepare our environment for the data processing and analysis tasks ahead.

![importn1](link)

We continue by importing essential libraries for data manipulation and model building. We load train_test_split from scikit-learn for partitioning data, StandardScaler for feature scaling, pandas for data handling, and tensorflow for constructing and training machine learning models. These tools equip us to handle data effectively and build predictive models.

![import dependencies n1](link)

In this setup, we prepared our environment for using Apache Spark. We installed Java and Apache Spark, ensuring compatibility by setting up the necessary environment variables. Then, we used findspark, a helpful library to easily initialize Spark within our Python notebook. This enables us to perform large-scale data processing efficiently.

![install java and spark](link)

We imported necessary libraries and initiated a Spark session named "SparkSQL." This session acts as the gateway to all Spark functionalities, enabling us to efficiently manage and process large datasets using Spark's structured data processing capabilities.

![import packages](link)

In this step, we read data from an AWS S3 bucket into a DataFrame using PySpark. We accessed the CSV file containing heart disease data located on S3, specified the URL, and then used Spark's ability to handle distributed data sources to load this data directly into our environment. After loading, we displayed the initial rows of the DataFrame to verify the successful import and to preview the data structure. This approach allows us to efficiently manage large datasets stored remotely.

![reading in the aws s3 bucket](link)

In this step, we created a temporary view of the heart disease DataFrame to facilitate easier querying and manipulation within Spark SQL. We also utilized methods to describe and display the schema of the DataFrame. This provides a detailed summary of the data's structure and statistical overview, helping to understand the dataset's characteristics before proceeding with further analysis. This approach is particularly useful for exploratory data analysis and ensuring data quality.

![creating temprary view of df](link)

We transformed "Yes" and "No" responses in our heart disease DataFrame to numerical values (1 and 0) across several health-related columns, making the data suitable for machine learning analysis. After updating, we previewed the changes to ensure accuracy, streamlining the dataset for further modeling.

![replace yes and no](link)

We checked the heart disease DataFrame for any missing values across all columns. This step helps identify any gaps in data that may require cleaning or imputation before analysis, ensuring the integrity and usability of our dataset for further statistical or machine learning tasks. If missing values are found, we list the affected columns; otherwise, we confirm that the data is complete.

![clean 1](link)

We removed any duplicate rows from the heart disease DataFrame to ensure data quality and accuracy. After cleaning, we checked the DataFrame's dimensions to verify the data's structure and to understand the impact of the cleaning process. This step is crucial for maintaining a reliable dataset for accurate analyses and model training.

![duplicates](link)

- **Queries and Visualizations:**


For our first query, we analyzed the distribution of heart attacks by gender in our dataset. First, we grouped the data by gender to count occurrences and total heart attacks for each group. Then, we determined which gender had more heart attacks, revealing males are more at risk. This analysis was visualized using a line plot that highlights the total number of heart attacks for males and females, clearly showing the differences and emphasizing the risk assessment visually.

![Q1](link)
![V1](link)

This is our plot:

![Plot1](link)

For our second query, we examined how age influences the risk of heart disease by creating a temporary view of our DataFrame and executing a SQL query to calculate the average heart attack occurrence by age category. The results, visualized in a scatter plot, highlight the increasing risk of heart disease with age, with older age groups showing significantly higher risks. This analysis helps in understanding age-related patterns in heart disease incidence within the dataset.

![Q2](link)
![V2](link)

This is our plot:
![Plot2](link)

For our third query, we assessed the diversity of race and ethnicity in our dataset by querying the count of different groups, creating a temporary view for these operations. The query results were then visualized using a bar plot to clearly display the distribution of individuals across various race and ethnicity categories, highlighting demographic diversity within our data.

![Q3](link)
![V3](link)

This is our plot: 
![Plot3](link)

For our fourth query, we analyzed how race and ethnicity correlate with heart disease prevalence. A SQL query was executed to calculate average heart disease risk for each racial and ethnic group. The results were visualized in a bar plot, displaying the prevalence rate across different groups to highlight disparities in heart disease risk based on race and ethnicity.

![Q4](link)
![V4](link)

This is our plot: 

![Plot4](link)

For our fith query, we investigated the impact of BMI on heart disease risk by calculating average BMI and heart disease prevalence from our dataset. A SQL query grouped by heart attack occurrence provided insights into how BMI correlates with heart disease, with the results showcasing variations in average BMI among those with and without heart disease.
![Q5](link)
![V5](link)

This is our plot: 

![Plot5](link)

For our sixth query, we explored the impact of smoking on heart disease risk by executing a SQL query to assess the prevalence of heart disease across different smoking statuses. This analysis highlights how smoking behavior correlates with heart disease, emphasizing the importance of smoking cessation in reducing heart disease risk.

![Q6](link)
![V6](link)

This is our plot:

![Plot6](link)

For our seventh query, we investigate the correlation between diabetes and heart disease by calculating the average prevalence of heart disease among individuals with and without diabetes. The results are displayed in a table format, followed by a stacked bar chart which visually represents the heart disease prevalence based on diabetes status.

![Q7](link)
![V7](link)

This is our plot: 

![Plot7](link)

In this last query, the SQL analysis examines the correlation between the number of teeth removed and the prevalence of heart disease. The data is aggregated and visualized to show whether individuals with more teeth removed have a higher likelihood of heart disease, represented by increasing heart disease prevalence as more teeth are removed. The visualization likely uses an area plot to illustrate the cumulative trend of heart disease prevalence across different categories of teeth removal.

![Q8](link)
![V8](link)

This is our plot:

![PLOT8](link)
