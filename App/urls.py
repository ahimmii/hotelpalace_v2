# project/urls.py
from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("login/", views.user_login, name="login"),
    path("logout/", views.user_logout, name="logout"),
    path("", views.user_dashboard, name="dashboard"),  # Replace 'yourapp' with your actual app name.
    path("test/", views.test, name="test"),



    # doctors
    path("doctors/new/", views.doctor_create, name="doctor_create"),
    path("doctors", views.doctor_list, name="doctor_list"),
    path("doctors/<pk>/", views.doctor_detail, name="doctor_detail"),
    path("doctors/<pk>/edit/", views.doctor_edit, name="doctor_edit"),
    path('doctors/<pk>/update/', views.doctor_update, name='doctor_update'),
    path("doctors/<pk>/delete/", views.doctor_delete, name="doctor_delete"),



    #patients
    path('patients', views.patient_list, name='patient_list'),
    path('patients/new/', views.patient_create, name='patient_create'),
    path('patients/<pk>/', views.patient_detail, name='patient_detail'),
    path('patients/<int:pk>/edit/', views.patient_edit, name='patient_edit'),
    path('patients/<pk>/update/', views.patient_update, name='patient_update'),
    path('patients/<pk>/delete/', views.patient_delete, name='patient_delete'),



    #appointments
    path('appointments/', views.appointment_list, name='appointment_list'),
    path('appointments/<int:pk>/', views.appointment_detail, name='appointment_detail'),
    path('appointments/new/', views.appointment_create, name='appointment_create'),
    path('appointments/<pk>/edit/', views.appointment_edit, name='appointment_edit'),
    path('appointments/<pk>/delete/', views.appointment_delete, name='appointment_delete'),




    #prescription
    path('prescriptions/', views.prescription_list, name='prescription_list'),
    path('prescriptions/<int:pk>/', views.prescription_detail, name='prescription_detail'),
    path('prescriptions/new/', views.prescription_create, name='prescription_create'),
    path('prescriptions/<int:pk>/edit/', views.prescription_edit, name='prescription_edit'),
    path('prescriptions/<int:pk>/delete/', views.prescription_delete, name='prescription_delete'),



    #drug
    path('drugs/new', views.drug_create, name='drug_create'),






    #test
    path('tests/', views.test_list, name='test_list'),
    path('tests/<int:pk>/', views.test_detail, name='test_detail'),
    path('tests/new/', views.test_create, name='test_create'),
    path('tests/<int:pk>/edit/', views.test_edit, name='test_edit'),
    path('tests/<int:pk>/delete/', views.test_delete, name='test_delete'),


    #calendar
    path('calendar/', views.calendar, name='calendar_list'),
    path('calendar/<pk>/edit/', views.calendar_edit, name='calendar_edit'),
    path('calendar_save/', views.save_calendar, name='calendar_save'),



    #report

    path('reports/', views.report_list, name='report_list'),
    path('reports/<int:pk>/', views.report_detail, name='report_detail'),
    path('reports/new/', views.report_create, name='report_create'),
    path('reports/<int:pk>/edit/', views.report_edit, name='report_edit'),
    path('reports/<int:pk>/delete/', views.report_delete, name='report_delete'),



    #billing
    path('invoices/new', views.invoice_create, name='invoice_create'),
    path('billing/', views.billing_list, name='billing_list'),



    #settings
    path('doctor-settings/', views.doctor_settings, name='doctor_settings'),
    path('prescriptions-settings/', views.prescriptions_settings, name='prescriptions_settings'),


]
