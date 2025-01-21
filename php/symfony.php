<?php
/**
 * @author Md. Adal Khan 20 JAN 2025 
 * Work flow of Symfony
 */


# Doctrine - The Database Abstraction Layer

/*
01. composer require doctrine
02. DATABASE_URL="sqlite:///%kernel.project_dir%/var/data.db"
03. Create Entity ( An Object representing a Table in Database) - php bin/console make:entity users. This will create two files. The Entity and The Repository
    if you want the command line to dynamically add field just leave the entity name blank. just php bin/console make:entity

04. Main Types
  * string or ascii_string
  * text
  * boolean
  * integer or smallint or bigint
  * float

Relationships/Associations
  * relation a wizard will help you build the relation
  * ManyToOne
  * OneToMany
  * ManyToMany
  * OneToOne

Array/Object Types
  * array or simple_array
  * json
  * object
  * binary
  * blob

Date/Time Types
  * datetime or datetime_immutable
  * datetimetz or datetimetz_immutable
  * date or date_immutable
  * time or time_immutable
  * dateinterval

Other Types
  * enum
  * decimal
  * guid


  05. php bin/console doctrine:schema:create     -  Object representing the Table is create now create a schema to create actual table in sqlite.
  06. to perform any Operation use EntityManager. EG CRUD Operation
  07. Create a Controller to handle IO Operation. EntityManager Must return a response Object along with the data/json

  Summary:
   - install doctrine, create entity
   - create schema
   - use entity manager to perform io operation.
*/ 

php bin/console doctrine:migrations:diff // Generate Migration
php bin/console doctrine:migrations:migrate // Run the MIrgration



// 

namespace App\Controller;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController
{
    /**
     * @Route("/create-product", name="create_product")
     */
    public function create(EntityManagerInterface $entityManager): Response
    {
        $product = new Product();  
        $product->setName('Laptop');
        $product->setPrice(999.99);

        // Persist the product to the database
        $entityManager->persist($product); // Marks an entity for insertion and deletion or execute
        $entityManager->flush(); // Saving Data

        return new Response('Created product with ID ' . $product->getId());
    }
}


// DI - Dependancy Injection and Service Container
// Each Particular task is called a service. Such as Mailer is a service denoted by Class mailer

class Mailer {
  private $logger; // Pass any Object as service and reference it with this private variable within constructor
  // DI
  public function __construct(LoggerService $logger) {
        $this->logger = $logger;
    }
}


// SC - Service Container - Holds all services and maintain the DI for all - Automatic and Manual configuaration using YAML

# config/services.yaml
services:
    App\Service\MailerService:
        arguments:
            $logger: '@App\Service\LoggerService'

    App\Service\LoggerService: ~


// src/Controller/EmailController.php

namespace App\Controller;

use App\Service\MailerService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class EmailController extends AbstractController
{
    /**
     * @Route("/send-email", name="send_email")
     */
    public function sendEmail(MailerService $mailerService) // Inject MailerService Here which inject automatically the dependancy the logger service
    {
        // ডিপেন্ডেন্সি ইনজেকশন দ্বারা MailerService ক্লাস ব্যবহার করা হচ্ছে
        $mailerService->sendEmail('example@example.com', 'Hello Symfony!');
        
        return $this->json(['status' => 'Email sent']);
    }
}


// Accessing the service directly

// src/Controller/SomeController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Routing\Annotation\Route;

class SomeController extends AbstractController
{
    /**
     * @Route("/some-service", name="some_service")
     */
    public function index(ContainerInterface $container)
    {
        $mailerService = $container->get('App\Service\MailerService');
        $mailerService->sendEmail('test@example.com', 'Test message');
        
        return $this->json(['status' => 'Service used']);
    }
}


